import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Terms: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      id="terms"
      className="bg-[#EEF7FF] text-[#001F3F] min-h-screen py-12 px-6 md:px-12"
    >
      <div id="home" className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-semibold text-[#0F3B36] mb-6 text-center">
          Terms and conditions
        </h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-justify">
           Welcome to ZadSports, a ground booking platform designed to simplify the process of reserving sports grounds By using the ZadSports mobile application, you agree to the following Terms and Conditions. Please read them carefully before proceeding with any booking
          </p>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            1. Acceptance of Terms
          </h2>
          <p>
           By accessing or using the ZadSports app, you acknowledge and agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms communicated during the booking process. If you do not agree, you may not use our services
          </p>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            2. Services Provided
          </h2>
          <p>
           ZadSports provides:<br />
•	Ground bookings for sports or recreational use with a minimum booking duration of 1 day.
<br />•	Optional add-ons, including:
<br/><b>o</b>	Breakfast and Lunch (subject to availability).
<br/><b>o</b>	Rooms/accommodation, offered only if permitted by the ground owner.
All bookings and add-ons are dependent on real-time availability and owner discretion
          
          </p>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            3. Booking and Payment Policy
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
            	Full Payment Required: To confirm any reservation, 100% payment must be made at the time of booking.
             </li>
             <li>
                Minimum Booking: All bookings must be made for at least one full day.
              </li>
              <li>
                  No Partial Payments: Bookings without full payment will not be confirmed or held.
              </li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            4. Cancellation and Refund Policy
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              	Strict No-Refund Policy: All payments made are non-refundable, regardless of the reason for cancellation 
            </li>
            <li>
             Non-transferable: Bookings are tied to your account and cannot be transferred to another individual or group.
            </li>
            
          </ul>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            5. Availability of Add-On Services
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Meals and Rooms are offered only when made available by the property owner.
            </li>
            <li>
             ZadSports does not guarantee the availability of any add-ons unless explicitly confirmed at the time of booking.
            </li>
            <li>
             Availability may vary depending on the location, date, and capacity
            </li>
            </ul>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            6. User Responsibilities
          </h2>
          <p>
            By using ZadSports, you agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate personal and booking information.</li>
            <li>Respect the property, rules, and conditions set by the ground owner.</li>
            <li>Avoid misuse or unauthorized use of the app or services.</li>
          </ul>
          <p>Misconduct, damage to property, or violation of usage rules may result in suspension or termination of your access to the platform.</p>
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            7. Liability and Disclaimer
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>ZadSports acts as a booking facilitator between users and property owners.</li>
            <li>We are not liable for any issues related to the condition of the grounds, services provided by the owners, or add-on availability.</li>
            <li>All users are advised to directly communicate with property owners for any specific requirements or concerns.</li>
            <li>ZadSports shall not be held responsible for any damages, losses, or dissatisfaction resulting from bookings.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#0F3B36]">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding these Terms, please contact us at:
            <br />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:med-info@zadroit.com"
              className="text-blue-500 underline"
            >
              info@zadroit.com
            </a>
          </p>
          
        </div>
      </div>
    </div >
  );
};

export default Terms;
