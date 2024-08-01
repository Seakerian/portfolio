import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: "SdlraKK9uD2gJWXg5",
      })
      .then(
        (result) => {
          console.log(result);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="py-12 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="font-merriweather m-4 text-4xl md:text-5xl text-gray-900 text-center">
        Contact me
      </h2>
      <div className="max-w-3xl w-full flex flex-wrap justify-center items-center space-y-8 text-center py-8">
        <div className="flex flex-wrap justify-evenly w-full">
          <div className="w-full md:w-auto m-2">
            <LocationOnIcon fontSize="large" className="text-gray-800" />
            <h3 className="font-merriweather mb-2 text-2xl md:text-3xl text-gray-900">
              Location
            </h3>
            <p className="text-lg text-gray-800 font-manrope">
              Manizales, Colombia
            </p>
          </div>
          <div className="w-full md:w-auto m-2">
            <EmailIcon fontSize="large" className="text-gray-800" />
            <h3 className="font-merriweather mb-2 text-2xl md:text-3xl text-gray-900">
              Email
            </h3>
            <p className="text-lg text-gray-800 font-manrope">
              marvindom1998@gmail.com
            </p>
          </div>
          <div className="w-full md:w-auto m-2">
            <PhoneAndroidIcon fontSize="large" className="text-gray-800" />
            <h3 className="font-merriweather mb-2 text-2xl md:text-3xl text-gray-900">
              Phone number
            </h3>
            <p className="text-lg text-gray-800 font-manrope">
              +57 300-352-86-32
            </p>
          </div>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 max-w-3xl w-full bg-white p-8 shadow-xl rounded-lg space-y-6 text-center"
      >
        <div>
          <label
            htmlFor="message"
            className="block text-xl font-merriweather text-gray-900 m-4"
          >
            Send me a message!
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Write your name"
            className="mt-2 w-1/3 p-3 border text-center border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-manrope text-gray-800"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Write your email"
            className="mt-2 w-1/2 p-3 border text-center border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-manrope text-gray-800"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message"
            className="mt-2 w-3/4 p-3 border text-center border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 font-manrope text-gray-800"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-3 gradient-bg animate-gradient text-white font-merriweather rounded-full hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
