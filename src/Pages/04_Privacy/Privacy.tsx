import React from "react";

const Privacy: React.FC = () => {
  return (
    <div id="privacy" className="bg-[#EEF7FF] text-[#001F3F] min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto p-8 md:p-12">
        <h1 className="text-3xl font-bold text-[#0F3B36] mb-6">Privacy Policy</h1>

        <h3 className="text-2xl font-semibold mt-6">1. Introduction</h3>
        <p className="text-lg leading-relaxed text-justify  space-y-8 ">
         
          Welcome to ZadSports ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our sports ground booking app ("App").<br />
          By using the App, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the App.
        </p>

        <h3 className="text-2xl font-semibold mt-6">2. Information We Collect</h3>
        <h4 className="text-xl font-semibold mt-4">a. Personal Information</h4>
        <ul className="list-disc pl-7 space-y-2 mt-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Contact details</li>
          <li>Age</li>
          <li>Occupation</li>
          <li>Career details</li>
        </ul>

        <h4 className="text-xl font-semibold mt-4">b. Device & Usage Data</h4>
        <ul className="list-disc pl-8 space-y-2 mt-1">
          <li>Mobile number (if registered)</li>
          <li>App usage patterns</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h3>
        <ul className="list-disc pl-8 space-y-2 mt-1">
          <li>Manage bookings and payments</li>
          <li>Provide customer support</li>
          <li>Improve our app and services</li>
          <li>Send booking confirmations, reminders, and promotional offers</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">4. Your Rights</h3>
        <ul className="list-disc pl-8 space-y-3 mt-1">
          <li>Access or update your personal information</li>
          <li>Delete your account</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">5. Data Sharing & Disclosure</h3>
        <p className="text-lg leading-relaxed">We do not sell your personal data. We may share information only under the following circumstances:</p>
        <ul className="list-disc pl-8 space-y-3 my-3">
          <li>With legal authorities, if required by law</li>
          <li>With third parties only upon your explicit authorization</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">6. Your Rights</h3>
        <p className="text-lg leading-relaxed">
          You have the right to:
        </p>
        <ul className="list-disc pl-8 space-y-2 mt-1">
          <li>Access or update your personal information</li>
          <li>Delete your account</li>
        </ul>
        <p className="text-lg leading-relaxed">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:info@zadroit.com" className="text-blue-500 underline">
            info@zadroit.com
          </a>.
        </p>

        <h3 className="text-2xl font-semibold mt-6">7. Third-Party Links</h3>
        <p className="text-lg leading-relaxed">
          The App may contain links to third-party services. We are not responsible for their privacy practices.
        </p>

        <h3 className="text-2xl font-semibold mt-6">8. Children’s Privacy</h3>
        <p className="text-lg leading-relaxed">
          The App is not intended for users under 13 years old. We do not knowingly collect data from minors.
        </p>

        <h3 className="text-2xl font-semibold mt-6">9. Changes to This Policy</h3>
        <p className="text-lg leading-relaxed">
          We may update this Privacy Policy periodically. The latest version will always be available on our platform. Significant changes will be communicated to you.
        </p>

        <h3 className="text-2xl font-semibold mt-6">10. Contact Us</h3>
        <p className="text-lg leading-relaxed">
          For questions or concerns, contact:
        </p>
        <p>Email:{" "}
          <a href="mailto:info@zadroit.com" className="text-blue-500 underline">
            info@zadroit.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
