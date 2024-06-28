"use client";
import "./contact.css";
import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GearIcon } from "@/components/icons/gearIcon";
import { ComputerIcon } from "@/components/icons/computerIcon";
import { Phone, Building2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    company_email: "",
    company_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      company_name,
      company_email,
      company_phone,
    } = formData;

    if (
      !first_name ||
      !last_name ||
      !company_name ||
      !company_email ||
      !company_phone
    ) {
      toast.warn("All fields are not filled", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_rig0kga",
        "template_vugc2nh",
        formRef.current,
        "AbGLZHz3UCBYcDKWB"
      )
      .then(
        () => {
          toast.success("Query Sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          toast.error(`FAILED... ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      );
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className="bg-gradient px-4 lg:px-[10%] py-12 md:py-40 gap-10 lg:gap-40 flex flex-col items-start justify-center bg-contact md:flex-row">
        <div className="text-[#F2F3F7] flex flex-col gap-10 md:w-[40%]">
          <div>
            <h1 className="mb-2 text-5xl font-extrabold">Contact our Team.</h1>
            <span className="text-4xl italic">
              {"Elevate Your Business\n with Neviton"}
            </span>
            <div className="pt-2 flex items-center gap-10 text-lg font-semibold">
              <div className="flex items-start justify-center gap-1">
                <Building2 />
                Neviton
              </div>
              <div className="flex items-start justify-center gap-1">
                <Phone color="#F2F3F7" />
                +91-8026713224
              </div>
            </div>
          </div>
          <p className="text-xl text-[#F2F3F7] text-[22px]">
            Discover the Neviton advantage today and experience the
            transformative power of cutting-edge solutions designed to elevate
            your business to new heights.
          </p>
          <div className="flex items-center gap-2 text-[20px]">
            <GearIcon />
            <p>Engineering solutions that propel your business forward</p>
          </div>
          <div className="flex items-center gap-2 text-[20px]">
            <ComputerIcon />
            <p>Information Technology Empowers Efficiency through Innovation</p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 text-black bg-white rounded-xl p-6 md:p-10 md:w-[40%]"
        >
          <div className="flex gap-2">
            <div className="space-y-2 w-[50%]">
              <Label htmlFor="first_name">First Name*</Label>
              <Input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 w-[50%]">
              <Label htmlFor="last_name">Last Name*</Label>
              <Input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company_name">Company Name*</Label>
            <Input
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company_email">Company Email Address*</Label>
            <Input
              name="company_email"
              value={formData.company_email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company_phone">Company Phone Number*</Label>
            <Input
              name="company_phone"
              value={formData.company_phone}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              name="message"
              placeholder="Enter your Message"
              className="h-24 border border-1 rounded-xl px-5 py-2"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-[#deff80] hover:bg-[rgba(22,69,236,.8)] hover:text-white contact-btn-text px-2 py-4 rounded-xl"
          >
            Get in Touch!
          </button>
        </form>
      </main>
      <div className="location">
        <div className="py-12 flex flex-col items-center justify-center">
          <div className="pt-24 pb-12 text-4xl text-center flex items-center justify-center gap-2">
            <h2>Our</h2>
            <h2 className="font-bold">Locations.</h2>
          </div>
        </div>
        <iframe
          className="w-full h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.800043639954!2d77.56990617575512!3d12.920569515993638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158783ae2ca1%3A0xeafb854a48008244!2sNeviton%20Softech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1709795301454!5m2!1sen!2sin"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
