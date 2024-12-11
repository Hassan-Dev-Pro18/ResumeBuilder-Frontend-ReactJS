import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-h1">Privacy Policy</h1>
      <p className="privacy-p">
        <strong>Last updated: September 9,2024</strong>
      </p>

      <section className="privacy-section">
        <p className="privacy-p">
          Welcome to Resume Builder, your trusted partner in crafting professional
          resumes. Your privacy is of utmost importance to us, and we are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you use our
          services. By using Resume Builder, you agree to the collection and use of
          information in accordance with this policy. We only collect personal
          data that is necessary for providing and improving our services to
          you. Our goal is to be transparent about our practices and ensure you
          have control over your information. If you have any questions or
          concerns about our Privacy Policy, feel free to contact us at any
          time.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Information We Collect</h2>
        <ul className="list-ul">
          <li className="list-li">
            Information you provide directly, such as when you create an
            account.
          </li>
          <li className="list-li">
            Information collected automatically, such as usage data.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">How We Use Your Information</h2>
        <ul className="list-ul">
          <li className="list-li">
            To operate, maintain, and provide features and functionality of our
            services.
          </li>
          <li className="list-li">To communicate with you.</li>
          <li className="list-li">For security purposes.</li>
          <li className="list-li">To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Sharing Your Information</h2>
        <p className="privacy-p">
          {" "}
          We do not share your personal information with third parties except as
          necessary to provide our services. We may share your information to
          comply with legal obligations or with your consent.
        </p>
        <ul className="list-ul">
          <li className="list-li">
            <strong>Service Providers:</strong> We may share your information
            with third-party service providers who assist us in operating our
            website, conducting our business, or providing services to you.
            These providers have access to your information only to perform
            specific tasks on our behalf and are obligated not to disclose or
            use it for any other purpose.
          </li>
          <li className="list-li">
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or asset sale, your personal information may be
            transferred as part of that transaction. We will notify you before
            your information is transferred and becomes subject to a different
            Privacy Policy.
          </li>
          <li className="list-li">
            <strong>Legal Requirements:</strong> We may disclose your personal
            information if required to do so by law or in response to valid
            requests by public authorities (e.g., a court or government agency).
          </li>
          <li className="list-li">
            <strong>Protection of Rights:</strong> We may disclose your
            information when we believe it is necessary to investigate, prevent,
            or take action regarding illegal activities, suspected fraud,
            situations involving potential threats to the physical safety of any
            person, violations of our terms, or as otherwise required by law.
          </li>
          <li className="list-li">
            <strong>With Your Consent:</strong> We may share your personal
            information with others if you provide us with your explicit consent
            to do so. This may include sharing your information with partners or
            other third parties for marketing purposes, which will be clearly
            communicated to you at the time of consent.
          </li>
          <li className="list-li">
            <strong>Aggregated or Anonymized Data:</strong> We may share
            aggregated or anonymized information that cannot be used to identify
            you with third parties for research, analysis, or marketing
            purposes.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Your Rights</h2>
        <ul className="list-ul">
          <li className="list-li">
            You have the right to access, update, or delete your personal
            information at any time.
          </li>
          <li className="list-li">
            You can object to the processing of your data.
          </li>
          <li className="list-li">
            You can request that we restrict the use of your data.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Security</h2>
        <ul className="list-ul">
          <li className="list-li">
            We take the security of your personal information seriously.
          </li>
          <li className="list-li">
            We use appropriate measures to protect it from unauthorized access,
            alteration, or disclosure.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Changes to This Privacy Policy</h2>
        <ul className="list-ul">
          <li className="list-li">
            We may update our Privacy Policy from time to time to reflect
            changes in our practices, technologies, or legal requirements.
          </li>
          <li className="list-li">
            When we make changes to this Privacy Policy, we will update the
            "Last updated" date at the top of the policy.
          </li>
          <li className="list-li">
            We may also notify you of significant changes by posting a prominent
            notice on our website or by sending an email to the address
            associated with your account.
          </li>
          <li className="list-li">
            You are encouraged to review this Privacy Policy periodically to
            stay informed about how we are protecting your information.
          </li>
          <li className="list-li">
            Your continued use of our services after any changes to this Privacy
            Policy will constitute your acceptance of such changes.
          </li>
          <li className="list-li">
            If you do not agree with any changes, you should cease using our
            services and contact us to request the deletion of your personal
            information.
          </li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-h2">Contact Us</h2>
        <ul className="list-ul">
          <li className="list-li">
            If you have any questions about this Privacy Policy, please contact
            us at ResumeBuilder@gmail.com.
          </li>
          <li className="list-li">
            If you cannot contect us through mail, you can approch us through
            contact us page{" "}
            <a href="/contact" className="privacy-a">
              Contact Us
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
