"use client";
import React, { useState } from "react";
import ButtonText from "../common/button/ButtonText";
import { RxCross1 } from "react-icons/rx";
import InputField from "../field/InputField";
import SelectField from "../field/SelectField";
import ButtonWhiteText from "../common/button/ButtonWhiteText";
import Toast from "../common/toast/Toast";

interface ScheduleMeetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (meetingData: MeetingData) => void;
}

interface MeetingData {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  meetingType: string;
}

const ScheduleMeetModal: React.FC<ScheduleMeetModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [meetingData, setMeetingData] = useState<MeetingData>({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    meetingType: "video",
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setMeetingData({ ...meetingData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", meetingData);
    onSubmit(meetingData);
    setToastMessage(
      "Meeting scheduled successfully! Our team will get back to you soon. Thank you for cooperating."
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white text-gray-800 rounded-lg shadow-xl w-full max-w-xl overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              Schedule a Meeting
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
            >
              <RxCross1 size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-5">
              <>
                <div className="mb-4">
                  <InputField
                    label="Meeting Title"
                    name="title"
                    onChange={handleChange}
                    value={meetingData.title}
                    placeholder="Enter meeting title"
                    type="text"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <InputField
                    label="Date"
                    name="date"
                    onChange={handleChange}
                    value={meetingData.date}
                    type="date"
                  />
                  <div className="w-full md:w-1/3">
                    <InputField
                      label="Start Time"
                      type="time"
                      name="startTime"
                      value={meetingData.startTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/3">
                    <InputField
                      type="time"
                      name="endTime"
                      label="End Time"
                      value={meetingData.endTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <SelectField
                    label="Meeting Type"
                    name="meetingType"
                    value={meetingData.meetingType}
                    onChange={handleChange}
                    options={["Video Conference", "Audio Only", "In person"]}
                    required
                  />
                </div>

                <div className="mb-4">
                  <InputField
                    label="Description"
                    name="description"
                    value={meetingData.description}
                    onChange={handleChange}
                    placeholder="Add meeting details"
                    rows={3}
                  />
                </div>
              </>
            </div>

            <div className="flex justify-end px-5 py-4 bg-gray-50 border-t gap-2">
              <ButtonWhiteText name="Cancel" onClick={onClose} />
              <ButtonText name="Send" type="submit" />
            </div>
          </form>
        </div>
      </div>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </>
  );
};

export default ScheduleMeetModal;
