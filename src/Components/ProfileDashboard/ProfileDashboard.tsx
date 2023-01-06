/* eslint-disable */
import React, { useEffect, useState } from "react";
import profille from "./ProfileDashboard.module.css";
import { apiGet, apiPatch } from "../../utils/api";
import { toast } from "react-toastify";
import { BsPlusCircle } from "react-icons/bs";
import LoginNavbar from "../Navbar/LoginNavbar/LoginNavbar";

interface User {
  email: string;
  profileImage: string;
  firstName?: string;
  lastName?: string;
  Country?: string;
  userName: string;
}
const ProfileDashboard = () => {
  {
    /* eslint-disable-next-line */
  }
  const [date_birth, setDate_birth] = useState("00/00/0000");
  const [user, setUser] = useState<User | null>(null);
  const [updateEffect, setUpdateEffect] = useState(false);
  // const [formData, setFormData] = useState<FormData>();

  const [dataValues, setDataValues] = useState<Record<string, any>>({});

  // let formData = new FormData();
  const [file, setFile] = useState<File>();

  useEffect(() => {
    const signature = localStorage.getItem("token");
    if (!signature) {
      toast.error("You must be logged in to perform this action.");
    } else {
      apiGet("/api/user/get-user")
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(console.error);
    }
  }, [updateEffect]);

  const handleChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    // formData?.append(name, value);
    setDataValues({ ...dataValues, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      console.log(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  const submitProfileUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      // firstName, lastName, email, country, date_birth
      const formData = new FormData();
      date_birth && formData.append("date_birth", date_birth);
      dataValues.firstName &&
        formData.append("firstName", dataValues.firstName);
      dataValues.lastName && formData.append("lastName", dataValues.lastName);
      dataValues.email && formData.append("email", dataValues.email);
      dataValues.country && formData.append("country", dataValues.country);

      if (file !== undefined) {
        formData.append("profileImage", file);
      }
      await apiPatch("/api/user/update", formData)
        .then((res) => {
          toast.success(res.data.message);
          setUser(res.data.user);
          // formData = new FormData();
          setUpdateEffect(!updateEffect);
        })
        .catch(console.log);
    } catch (err) {
      console.log(err);
      toast.error("An error occured");
    }
  };

  const makeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "day") {
      const newDate = `${e.target.value}${date_birth.slice(2)}`;
      setDate_birth(newDate);
    }
    if (e.target.name === "month") {
      const newDate = `${date_birth.slice(0, 3)}${
        e.target.value
      }${date_birth.slice(5)}`;
      setDate_birth(newDate);
    }
    if (e.target.name === "year") {
      const newDate = `${date_birth.slice(0, 6)}${e.target.value}`;
      setDate_birth(newDate);
    }
  };

  return (
    <div className={profille.container}>
      <LoginNavbar openModal={undefined} openLoginModal={undefined} />
      <div className={profille.userContainer}>
        <div className={profille.user}>
          <label className={profille.fileUpload}>
            {/* checkhere {user && (  */}
            {user != null && (
              <img
                alt="profile"
                src={user.profileImage}
                className={profille.profileImg}
              />
            )}
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              className={profille.uploadInput}
            />
            <BsPlusCircle className={profille.plussign} />
            {/* check here <p>{file && file.name}</p> */}
            <p>{file != null && file.name}</p>
          </label>
          <div className={profille.userText}>
            <h3>{user?.userName ? user?.userName : "John Doe"}</h3>
            <p>Free Account</p>
          </div>
        </div>
        <button>Go to Premium</button>
      </div>
      <div className={profille.formdiv}>
        <h1>Contact</h1>
        <form className={profille.form} encType="multipart/form-data">
          <div className={profille.name}>
            <div>
              <label>First Name</label>
              <input
                className={profille.nameinput}
                type="text"
                name="firstName"
                // placeholder={user?.firstName || "samuel"}
                placeholder={"firstName"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                className={profille.nameinput}
                type="text"
                name="lastName"
                // placeholder={user?.lastName || "james"}
                placeholder={"lastName"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={profille.email}>
            <label>Email</label>
            <input
              className={profille.nameinput}
              type="text"
              name="email"
              placeholder={"Your email"}
              // placeholder={user?.email || "skipper2905@mail.com"}
              onChange={handleChange}
            />
          </div>

          <div className={profille.genderCountry}>
            <div className={profille.genderselect}>
              <p>Gender</p>
              {/* <input type="text" placeholder="Male" onChange={handleChange} /> */}
              <select
                name="gender"
                placeholder="gender"
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className={profille.genderselect}>
              <p>Country</p>
              {/* <input type="text" name="Country" placeholder={user?.Country || "Ukraine"} onChange={handleChange} /> */}
              <select
                name="Country"
                placeholder={"Country"}
                onChange={handleChange}
              >
                <option value="Ukraine">Ukraine</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Egypt">Egypt</option>
                <option value="Cameroon">Cameroon</option>
              </select>
            </div>
          </div>
          <div className={profille.dateMonthYear}>
            <div>
              <p>Date of Birth</p>
              {/* <input type="text" placeholder="1" name="day" onChange={makeDate} /> */}
              <select name="date" className={profille.dateMonthYear}>
                <option value="male">1</option>
                <option value="female">2</option>
                <option value="female">3</option>
              </select>
            </div>

            <div>
              <p>Month</p>
              {/* <input type="text" placeholder="January" name="month" onChange={makeDate} /> */}
              <select name="month" className={profille.dateMonthYear}>
                <option value="01">January</option>
                <option value="02">Feburary</option>
                <option value="03">March</option>
              </select>
            </div>

            <div>
              <p>Year</p>
              {/* <input type="text" placeholder="1990" name="year" onChange={makeDate} /> */}
              <select name="month" className={profille.dateMonthYear}>
                <option value="01">1990</option>
                <option value="02">1991</option>
                <option value="03">1992</option>
              </select>
            </div>
          </div>
          <div className={profille.submit}>
            {/* eslint-disable-next-line */}
            <button type="submit" onClick={submitProfileUpdate}>
              Submit
            </button>
          </div>
        </form>

        <div className={profille.userContainerF}>
          <p>Facebook</p>
          <p>Not Connected</p>
        </div>
        <div className={profille.userContainerG}>
          <p>Google</p>
          <p>Not Connected</p>
        </div>
      </div>

      <div className={profille.streaming}>
        <h3>Streaming</h3>
        <div>
          <h4 className={profille.audio}>Audio Quality (Premium feature)</h4>
          <form className={profille.checkForm}>
            <div className={profille.check}>
              <input type="radio" name="audio" />
              <label htmlFor="normal">Normal (128 kb/s)</label>
            </div>
            <div className={profille.check}>
              <input type="radio" name="audio" id="high" />
              <label htmlFor="high">High (192 kb/s)</label>
            </div>
            <div className={profille.check}>
              <input type="radio" name="audio" />
              <label htmlFor="highest">Highest (320 kb/s)</label>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <div className={profille.footercontainer}>
        <h1 className={profille.contactradioh1}>Account</h1>
        <div className={profille.footercolumncontent}>
          <h3>Enable Browser Notification</h3>
          <div className="center">
            <input type="checkbox" name="" className={profille.inputbttn} />
          </div>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Language</h3>
          <select name="gender" className={profille.inputboxlang}>
            <option value="male">English</option>
            <option value="radio">French</option>
            <option value="radio">German</option>
          </select>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Change password</h3>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Add new account</h3>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Terms and Conditions</h3>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Privacy Policy</h3>
        </div>
        <div className={profille.footercolumncontent}>
          <h3>Support</h3>
        </div>
      </div>

      <div className={profille.logout}>
        <button type="submit" className="" value="Logout">
          Logout{" "}
        </button>
      </div>
    </div>
  );
};

export default ProfileDashboard;
