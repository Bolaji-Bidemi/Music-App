// import "../../pages/Home/Home.css";
import "react-toastify/dist/ReactToastify.css";

const ForgotPass = (props: {
	setFrgtPwdMail: any;
	handleFgtPwdSubmit: any;
}) => {
	return (
		<div className="forgot">
			<header>
				<h2>Forgot Password</h2>
			</header>
			<main>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form>
					<p>Email</p>
					<input
						type="email"
						placeholder="example@gmail.com"
						name="email"
						onChange={(e: { target: { name: any; value: any } }) =>
							props.setFrgtPwdMail(e.target.value)
						}
						required
						id="fgtpswdmail"
					/>
					{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
					<button onClick={props.handleFgtPwdSubmit}>Forgot Password</button>
				</form>
			</main>
		</div>
	);
};

export default ForgotPass;
