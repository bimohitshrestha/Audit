"use client";
import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";
import ButtonText from "./component/common/button/ButtonText";
import InputField from "./component/field/InputField";
import SelectField from "./component/field/SelectField";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "financial-audit",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "financial-audit",
      });
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50" id="contact">
      <main>
        <div className="bg-level text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100">
                Have questions or need assistance? Our team is here to help you
                with all your audit and assurance needs.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Send us a message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded">
                    {`Thank you for your message! We'll get back to you shortly.`}
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded">
                    There was an error submitting your message. Please try
                    again.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <InputField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <InputField
                      label="Company Name"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-6">
                    <SelectField
                      label="Service of Interest"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      options={[
                        "Financial Audit",
                        "Internet Audit",
                        "Compliance Services",
                        "Risk Advisory",
                        "Tax Services",
                        "Other Services",
                      ]}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <InputField
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <ButtonText
                      type="submit"
                      name={isSubmitting ? "sending" : "Send Message"}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <BiMapPin className="h-6 w-6 text-blue-800 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Office Address
                      </h4>
                      <p className="text-accent mt-1">Dillibazar,Kathmandu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <BiPhone className="h-6 w-6 text-blue-800 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-accent mt-1">
                        <a
                          href="tel:+12125551234"
                          className="hover:text-blue-800"
                        >
                          1234567890
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <RiMvAiLine className="h-6 w-6 text-blue-800 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-accent mt-1">
                        <a
                          href="mailto:info@precisionaudit.com"
                          className="hover:text-blue-800"
                        >
                          audit@audit.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
