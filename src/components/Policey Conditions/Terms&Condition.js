import React from "react";
import { motion } from "framer-motion";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="terms-containers"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className="terms-title">
        Terms and Conditions
      </motion.h1>{" "}
      <motion.p variants={itemVariants} className="terms-p">
        <strong>Last updated: September 9,2024</strong>
      </motion.p>
      <motion.p variants={itemVariants} className="terms-p">
        Welcome to Resume Builder, your trusted partner in crafting professional
        resumes. Your privacy is of utmost importance to us, and we are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        services. By using Resume Builder, you agree to the collection and use of
        information in accordance with this policy. We only collect personal
        data that is necessary for providing and improving our services to you.
        Our goal is to be transparent about our practices and ensure you have
        control over your information. If you have any questions or concerns
        about our Privacy Policy, feel free to contact us at any time.
      </motion.p>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Resume Builder, you agree to comply with and be bound
          by the following terms and conditions. If you disagree with any part
          of these terms, you should not use our website. By using Resume Builder, you
          acknowledge that you have read, understood, and agreed to these terms.
          These terms may be updated from time to time, and it is your
          responsibility to review them periodically. Continued use of our
          services after any changes constitutes acceptance of those changes. We
          are committed to protecting your privacy and personal information.
          Please review our to understand how we collect, use, and protect your
          data. Your use of Resume Builder signifies your acceptance of our privacy
          practices as outlined in our Privacy Policy.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>2. License to Use</h2>
        <p>
          Resume Builder grants you a limited, non-exclusive, non-transferable, and
          revocable license to use our resume builder tool. You must not:
        </p>
        <ul className="terms-ul">
          <li className="terms-li">
            Republish, distribute, or share any content or materials obtained
            from Resume Builder in any form or through any medium, whether
            electronically or otherwise, without prior written consent from
            Resume Builder.
          </li>
          <li className="terms-li">
            Use the Resume Builder tool to create or distribute any content that is
            illegal, defamatory, obscene, or otherwise objectionable or violates
            any third-party rights.
          </li>
          <li className="terms-li">
            Reproduce, duplicate, or copy any material for commercial purposes.
          </li>
        </ul>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>3. User Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and password and for restricting access to your computer and
          other devices. You agree to accept responsibility for all activities
          that occur under your account or password. This includes:
        </p>
        <ul className="terms-ul">
          <li className="terms-li">
            Ensuring that your account information, including your email address
            and password, is kept secure and private. You should not share your
            login details with others or use another person’s account to access
            our services.
          </li>
          <li className="terms-li">
            Notifying Resume Builder immediately if you become aware of any
            unauthorized use of your account or any other breach of security.
            You should contact us at <a className = "terms-a"href="/contact-us">our contact page</a>{" "}
            to report any suspicious activity or security concerns.
          </li>
          <li className="terms-li">
            Taking appropriate steps to log out of your account when you are
            finished using our services, especially if you are using a shared or
            public computer. This helps to prevent unauthorized access to your
            account.
          </li>
          <li className="terms-li">
            Regularly updating your password to maintain account security. Use a
            strong password that includes a combination of letters, numbers, and
            special characters.
          </li>
        </ul>
        <p>
          Resume Builder will not be liable for any loss or damage arising from your
          failure to protect your account details or from unauthorized access to
          your account. We reserve the right to suspend or terminate your
          account if we suspect any misuse or breach of our terms.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          The content and design of the Resume Builder website and resume templates
          are owned by Resume Builder. You are not permitted to use any content or
          design without prior written consent. Any unauthorized use,
          reproduction, distribution, modification, or display of Resume Builder
          content and designs is strictly prohibited. This includes using any
          part of the content for commercial purposes, creating derivative works
          based on our materials, or incorporating any of our content into other
          products or services without obtaining prior written consent from
          Resume Builder. You acknowledge that any breach of these intellectual
          property terms may result in legal action and the termination of your
          access to our services. Resume Builder reserves the right to enforce its
          intellectual property rights to the fullest extent permitted by law.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>5. Limitation of Liability</h2>
        <p>
          Resume Builder will not be liable for any loss or damage arising from your
          use of the site. This includes, but is not limited to:
        </p>
        <ul className="terms-ul">
          <li className="terms-li">
            Indirect or consequential losses, such as loss of profits, revenue,
            or data.
          </li>
          <li className="terms-li">
            Incidental damages that occur as a result of using or being unable
            to use the site, including but not limited to interruptions in
            service or errors in the content.
          </li>
          <li className="terms-li">
            Any damage to your computer systems or data as a result of accessing
            or using our site, including viruses or malware that may be
            transmitted through the site.
          </li>
          <li className="terms-li">
            Losses arising from unauthorized access to or alteration of your
            account or data, including breaches of security.
          </li>
        </ul>
        <p>
          Our total liability for any claims arising out of your use of the site
          shall not exceed the amount you paid, if any, for the use of the
          services in question. We reserve the right to limit our liability to
          the fullest extent permitted by applicable law.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>6. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the
          Resume Builder website and services at our sole discretion, with or without
          cause, if you violate any of these terms and conditions. This
          includes, but is not limited to, breaches of the terms of use,
          unauthorized use of the site, or any other conduct that we, in our
          sole judgment, deem inappropriate or harmful to Resume Builder or its users.
          If we determine that you have violated our terms, we may take
          appropriate actions to address the violation, including but not
          limited to suspending or permanently terminating your account,
          restricting your access to the site, and removing any content you have
          submitted. We are not obligated to provide any prior notice or
          explanation for such actions. In the event of termination, you will
          lose access to all features and content associated with your account.
          You will not be entitled to any refunds or compensation for any losses
          incurred as a result of the termination. Any provisions of these terms
          that by their nature should survive termination will remain in effect
          after such termination.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>7. Changes to Terms</h2>
        <p>
          Resume Builder reserves the right to modify these terms and conditions at
          any time. It is important for you to be aware of the following:
        </p>
        <ul className="terms-ul">
          <li className="terms-li">
            We may update or change the terms to reflect new services, features,
            or legal requirements, or for other reasons as deemed necessary by
            Resume Builder.
          </li>
          <li className="terms-li">
            It is your responsibility to review the terms regularly to stay
            informed about any changes. We will make reasonable efforts to
            notify you of significant changes, but it is ultimately your duty to
            check for updates.
          </li>
          <li className="terms-li">
            If you have any questions about the updated terms or need
            clarification, you can contact us at{" "}
            <a className = "terms-a" href="/contact-us">our contact page</a>. We are here to assist
            you with any concerns regarding the terms of use.
          </li>
        </ul>
      </motion.div>
      <motion.div variants={itemVariants} className="terms-section">
        <h2>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Pakistan. The following points outline how this
          applies:
        </p>
        <ul className="terms-ul">
          <li className="terms-li">
            The laws of Pakistan will govern any disputes or claims arising from
            or related to your use of the Resume Builder website and services. This
            includes, but is not limited to, issues related to the
            interpretation of these terms, the legality of your use, and any
            other legal matters.
          </li>
          <li className="terms-li">
            All terms and conditions, including any policies referenced herein,
            constitute the entire agreement between you and Resume Builder regarding
            your use of the site and supersede all prior agreements and
            understandings, whether written or oral, related to the subject
            matter.
          </li>
        </ul>
      </motion.div>
      <motion.p variants={itemVariants} className="terms-footer"></motion.p>
    </motion.div>
  );
};

export default TermsAndConditions;
