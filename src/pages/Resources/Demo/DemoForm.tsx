import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ScheduleDemo = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        companyName: '',
        phone: '',
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const scheduleDemo = async () => {
        const { email } = formData;
        if (!validateEmail(email)) {
            Swal.fire("Error!", "Email is invalid!", "error");
            return;
        }

        try {
            const submitBtn = document.getElementById("submitdemo") as HTMLButtonElement;
            submitBtn.setAttribute("disabled", "disabled");
            submitBtn.innerHTML = "Please wait...";

            const response = await fetch("https://prodapi2.legittai.com/api/notification/sendMail", {
                method: "POST",
                body: JSON.stringify({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    senderEmail: "akashnigam1507@gmail.com, harshdeep.rapal@legittai.com"
                }),
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
            });

            if (response.ok) {
                Swal.fire("Thank you!", "We have received your mail. Our team will contact you shortly!", "success");
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    companyName: '',
                    phone: '',
                });
            } else {
                Swal.fire("Error!", "Something went wrong while sending email. Try again or email at info@legittai.com!", "error");
            }
        } catch (err) {
            console.log("Error:", err);
            Swal.fire("Error!", "Something went wrong while sending email. Try again or email at info@legittai.com!", "error");
        } finally {
            const submitBtn = document.getElementById("submitdemo") as HTMLButtonElement;
            submitBtn.removeAttribute("disabled");
            submitBtn.innerHTML = "Submit";
        }
    };

    return (
        <div className="flex justify-center px-6 gap-[50px]">
            <div className="bg-[#ffe8ec] p-10 max-w-xl  rounded-lg">
                <div className="text-2xl font-semibold leading-snug mb-3">
                    Schedule a Demo <span className="demo-discussion-text"> & Discussion with an Expert</span>
                </div>
                <div className="text-base text-black font-normal">
                    Please share your details below to schedule a demo and discussion with our team.
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                    <div className="relative mb-2 ">
                        <input
                            autoComplete="off"
                            required
                            className="relative  p-4 pt-6 bg-white border-none rounded text-black text-base"
                            type="text"
                            id="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder='First Name'
                        />
                    </div>
                    <div className="relative mb-2 ">
                        <input
                            autoComplete="off"
                            required
                            className="relative  p-4 pt-6 bg-white border-none rounded text-black text-base"
                            type="text"
                            id="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder='Last Name'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <div className="relative mb-2 ">
                        <input
                            autoComplete="off"
                            required
                            className="relative  p-4 pt-6 bg-white border-none rounded text-black text-base"
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email Address'
                        />
                    </div>
                    <div className="relative mb-2 ">
                        <input
                            autoComplete="off"
                            required
                            className="relative  p-4 pt-6 bg-white border-none rounded text-black text-base"
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder='Comapany'
                        />
                    </div>
                </div>

                <div className="relative mb-2 w-full">
                    <input
                        className="relative w-full p-4 pt-6 bg-white border-none rounded text-black text-base"
                        name="phone-input"
                        type="tel"
                        placeholder="Phone Number"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center mt-7">
                    <button className="common-button" id="submitdemo" onClick={scheduleDemo}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleDemo;
