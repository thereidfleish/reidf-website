import PrivacyPolicyLayout, {
  PolicySection,
  PolicyList,
} from "@/app/components/PrivacyPolicyLayout";

export const metadata = { title: "Quarantine Tutors Privacy Policy" };

export default function QTPrivacyPolicyPage() {
  return (
    <PrivacyPolicyLayout title="Privacy Notice">
      <p>Last updated January 16, 2021</p>
      <p>
        Thank you for choosing to be part of our community at Quarantine Tutors
        (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;). We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about this privacy notice, or our practices with regards to
        your personal information, please contact us at{" "}
        <a href="mailto:reidfleishman5@gmail.com">reidfleishman5@gmail.com</a>.
      </p>
      <p>
        When you use our mobile application, as the case may be (the
        &ldquo;App&rdquo;) and more generally, use any of our services (the
        &ldquo;Services&rdquo;, which include the App), we appreciate that you
        are trusting us with your personal information. We take your privacy
        very seriously. In this privacy notice, we seek to explain to you in
        the clearest way possible what information we collect, how we use it
        and what rights you have in relation to it. We hope you take some time
        to read through it carefully, as it is important. If there are any
        terms in this privacy notice that you do not agree with, please
        discontinue use of our Services immediately.
      </p>
      <p>
        This privacy notice applies to all information collected through our
        Services (which, as described above, includes our App), as well as, any
        related services, sales, marketing or events.
      </p>
      <p>
        Please read this privacy notice carefully as it will help you understand
        what we do with the information that we collect.
      </p>

      <PolicySection heading="Table of Contents">
        <ol className="list-decimal list-inside flex flex-col gap-1 pl-2">
          <li>What Information Do We Collect?</li>
          <li>How Do We Use Your Information?</li>
          <li>Will Your Information Be Shared With Anyone?</li>
          <li>How Long Do We Keep Your Information?</li>
          <li>How Do We Keep Your Information Safe?</li>
          <li>What Are Your Privacy Rights?</li>
          <li>Controls For Do-Not-Track Features</li>
          <li>Do California Residents Have Specific Privacy Rights?</li>
          <li>Do We Make Updates To This Notice?</li>
          <li>How Can You Contact Us About This Notice?</li>
          <li>How Can You Review, Update Or Delete The Data We Collect From You?</li>
        </ol>
      </PolicySection>

      <PolicySection heading="1. What Information Do We Collect?">
        <PolicySection heading="Personal information you disclose to us" level={3}>
          <p>
            <em>In Short:</em> &nbsp; We collect personal information that you
            provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the App, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the App (such as by posting messages in
            our online forums or entering competitions, contests or giveaways)
            or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of
            your interactions with us and the App, the choices you make and the
            products and features you use. The personal information we collect
            may include the following:
          </p>
          <p>
            <strong>Personal Information Provided by You.</strong> We collect
            names; email addresses; and other similar information.
          </p>
          <p>
            All personal information that you provide to us must be true,
            complete and accurate, and you must notify us of any changes to
            such personal information.
          </p>
        </PolicySection>
        <PolicySection heading="Information automatically collected" level={3}>
          <p>
            <em>In Short:</em> &nbsp; Some information &mdash; such as your
            Internet Protocol (IP) address and/or browser and device
            characteristics &mdash; is collected automatically when you visit
            our App.
          </p>
          <p>
            We automatically collect certain information when you visit, use or
            navigate the App. This information does not reveal your specific
            identity (like your name or contact information) but may include
            device and usage information, such as your IP address, browser and
            device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about
            how and when you use our App and other technical information. This
            information is primarily needed to maintain the security and
            operation of our App, and for our internal analytics and reporting
            purposes.
          </p>
          <p>The information we collect includes:</p>
          <PolicyList
            items={[
              <>
                <strong>Log and Usage Data.</strong> Log and usage data is
                service-related, diagnostic, usage and performance information
                our servers automatically collect when you access or use our App
                and which we record in log files. Depending on how you interact
                with us, this log data may include your IP address, device
                information, browser type and settings and information about
                your activity in the App (such as the date/time stamps
                associated with your usage, pages and files viewed, searches and
                other actions you take such as which features you use), device
                event information (such as system activity, error reports
                (sometimes called &lsquo;crash dumps&rsquo;) and hardware
                settings).
              </>,
              <>
                <strong>Device Data.</strong> We collect device data such as
                information about your computer, phone, tablet or other device
                you use to access the App. Depending on the device used, this
                device data may include information such as your IP address (or
                proxy server), device and application identification numbers,
                location, browser type, hardware model Internet service provider
                and/or mobile carrier, operating system and system configuration
                information.
              </>,
            ]}
          />
        </PolicySection>
        <PolicySection heading="Information collected through our App" level={3}>
          <p>
            <em>In Short:</em> &nbsp; We collect information regarding your
            mobile device, push notifications, when you use our App.
          </p>
          <p>If you use our App, we also collect the following information:</p>
          <PolicyList
            items={[
              <>
                <strong>Mobile Device Data.</strong> We automatically collect
                device information (such as your mobile device ID, model and
                manufacturer), operating system, version information and system
                configuration information, device and application identification
                numbers, browser type and version, hardware model Internet
                service provider and/or mobile carrier, and Internet Protocol
                (IP) address (or proxy server). If you are using our App, we
                may also collect information about the phone network associated
                with your mobile device, your mobile device&apos;s operating
                system or platform, the type of mobile device you use, your
                mobile device&apos;s unique device ID and information about the
                features of our App you accessed.
              </>,
              <>
                <strong>Push Notifications.</strong> We may request to send you
                push notifications regarding your account or certain features of
                the App. If you wish to opt-out from receiving these types of
                communications, you may turn them off in your device&apos;s
                settings.
              </>,
            ]}
          />
          <p>
            This information is primarily needed to maintain the security and
            operation of our App, for troubleshooting and for our internal
            analytics and reporting purposes.
          </p>
        </PolicySection>
      </PolicySection>

      <PolicySection heading="2. How Do We Use Your Information?">
        <p>
          <em>In Short:</em> &nbsp; We process your information for purposes
          based on legitimate business interests, the fulfillment of our
          contract with you, compliance with our legal obligations, and/or your
          consent.
        </p>
        <p>
          We use personal information collected via our App for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
        </p>
        <p>We use the information we collect or receive:</p>
        <PolicyList
          items={[
            <>
              <strong>To facilitate account creation and logon process.</strong>{" "}
              If you choose to link your account with us to a third-party
              account (such as your Google or Facebook account), we use the
              information you allowed us to collect from those third parties to
              facilitate account creation and logon process for the performance
              of the contract.
            </>,
            <>
              <strong>To post testimonials.</strong> We post testimonials on our
              App that may contain personal information. Prior to posting a
              testimonial, we will obtain your consent to use your name and the
              content of the testimonial. If you wish to update, or delete your
              testimonial, please contact us at{" "}
              <a href="mailto:reidfleishman5@gmail.com">
                reidfleishman5@gmail.com
              </a>{" "}
              and be sure to include your name, testimonial location, and
              contact information.
            </>,
            <>
              <strong>Request feedback.</strong> We may use your information to
              request feedback and to contact you about your use of our App.
            </>,
            <>
              <strong>To enable user-to-user communications.</strong> We may use
              your information in order to enable user-to-user communications
              with each user&apos;s consent.
            </>,
            <>
              <strong>To manage user accounts.</strong> We may use your
              information for the purposes of managing our account and keeping
              it in working order.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection heading="3. Will Your Information Be Shared With Anyone?">
        <p>
          <em>In Short:</em> &nbsp; We only share information with your consent,
          to comply with laws, to provide you with services, to protect your
          rights, or to fulfill business obligations.
        </p>
        <p>
          We may process or share your data that we hold based on the following
          legal basis:
        </p>
        <PolicyList
          items={[
            <>
              <strong>Consent:</strong> We may process your data if you have
              given us specific consent to use your personal information for a
              specific purpose.
            </>,
            <>
              <strong>Legitimate Interests:</strong> We may process your data
              when it is reasonably necessary to achieve our legitimate business
              interests.
            </>,
            <>
              <strong>Performance of a Contract:</strong> Where we have entered
              into a contract with you, we may process your personal information
              to fulfill the terms of our contract.
            </>,
            <>
              <strong>Legal Obligations:</strong> We may disclose your
              information where we are legally required to do so in order to
              comply with applicable law, governmental requests, a judicial
              proceeding, court order, or legal process, such as in response to
              a court order or a subpoena (including in response to public
              authorities to meet national security or law enforcement
              requirements).
            </>,
            <>
              <strong>Vital Interests:</strong> We may disclose your information
              where we believe it is necessary to investigate, prevent, or take
              action regarding potential violations of our policies, suspected
              fraud, situations involving potential threats to the safety of any
              person and illegal activities, or as evidence in litigation in
              which we are involved.
            </>,
          ]}
        />
        <p>
          More specifically, we may need to process your data or share your
          personal information in the following situations:
        </p>
        <PolicyList
          items={[
            <>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </>,
            <>
              <strong>Other Users.</strong> When you share personal information
              (for example, by posting comments, contributions or other content
              to the App) or otherwise interact with public areas of the App,
              such personal information may be viewed by all users and may be
              publicly made available outside the App in perpetuity. Similarly,
              other users will be able to view descriptions of your activity,
              communicate with you within our App, and view your profile.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection heading="4. How Long Do We Keep Your Information?">
        <p>
          <em>In Short:</em> &nbsp; We keep your information for as long as
          necessary to fulfill the purposes outlined in this privacy notice
          unless otherwise required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </PolicySection>

      <PolicySection heading="5. How Do We Keep Your Information Safe?">
        <p>
          <em>In Short:</em> &nbsp; We aim to protect your personal information
          through a system of organizational and technical security measures.
        </p>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure, so
          we cannot promise or guarantee that hackers, cybercriminals, or other
          unauthorized third parties will not be able to defeat our security,
          and improperly collect, access, steal, or modify your information.
          Although we will do our best to protect your personal information,
          transmission of personal information to and from our App is at your
          own risk. You should only access the App within a secure environment.
        </p>
      </PolicySection>

      <PolicySection heading="6. What Are Your Privacy Rights?">
        <p>
          <em>In Short:</em> &nbsp; You may review, change, or terminate your
          account at any time.
        </p>
        <p>
          If you are a resident in the European Economic Area and you believe we
          are unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:{" "}
          <a
            href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </p>
        <p>
          If you are a resident in Switzerland, the contact details for the
          data protection authorities are available here:{" "}
          <a
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </a>
          .
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
          <a href="mailto:reidfleishman5@gmail.com">
            reidfleishman5@gmail.com
          </a>
          .
        </p>
        <PolicySection heading="Account Information" level={3}>
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <PolicyList
            items={["Contact us using the contact information provided."]}
          />
          <p>
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with applicable legal
            requirements.
          </p>
          <p>
            <strong>Opting out of email marketing:</strong> You can unsubscribe
            from our marketing email list at any time by clicking on the
            unsubscribe link in the emails that we send or by contacting us
            using the details provided below. You will then be removed from the
            marketing email list &mdash; however, we may still communicate with
            you, for example to send you service-related emails that are
            necessary for the administration and use of your account, to respond
            to service requests, or for other non-marketing purposes. To
            otherwise opt-out, you may:
          </p>
          <PolicyList
            items={["Contact us using the contact information provided."]}
          />
        </PolicySection>
      </PolicySection>

      <PolicySection heading="7. Controls For Do-Not-Track Features">
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this privacy notice.
        </p>
      </PolicySection>

      <PolicySection heading="8. Do California Residents Have Specific Privacy Rights?">
        <p>
          <em>In Short:</em> &nbsp; Yes, if you are a resident of California,
          you are granted specific rights regarding access to your personal
          information.
        </p>
        <p>
          California Civil Code Section 1798.83, also known as the &ldquo;Shine
          The Light&rdquo; law, permits our users who are California residents
          to request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we
          disclosed to third parties for direct marketing purposes and the names
          and addresses of all third parties with which we shared personal
          information in the immediately preceding calendar year. If you are a
          California resident and would like to make such a request, please
          submit your request in writing to us using the contact information
          provided below.
        </p>
        <p>
          If you are under 18 years of age, reside in California, and have a
          registered account with the App, you have the right to request removal
          of unwanted data that you publicly post on the App. To request removal
          of such data, please contact us using the contact information provided
          below, and include the email address associated with your account and a
          statement that you reside in California. We will make sure the data is
          not publicly displayed on the App, but please be aware that the data
          may not be completely or comprehensively removed from all our systems
          (e.g. backups, etc.).
        </p>
      </PolicySection>

      <PolicySection heading="9. Do We Make Updates To This Notice?">
        <p>
          <em>In Short:</em> &nbsp; Yes, we will update this notice as necessary
          to stay compliant with relevant laws.
        </p>
        <p>
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated &ldquo;Revised&rdquo; date and
          the updated version will be effective as soon as it is accessible. If
          we make material changes to this privacy notice, we may notify you
          either by prominently posting a notice of such changes or by directly
          sending you a notification. We encourage you to review this privacy
          notice frequently to be informed of how we are protecting your
          information.
        </p>
      </PolicySection>

      <PolicySection heading="10. How Can You Contact Us About This Notice?">
        <p>
          If you have questions or comments about this notice, you may email us
          at{" "}
          <a href="mailto:reidfleishman5@gmail.com">
            reidfleishman5@gmail.com
          </a>{" "}
          or by post to:
        </p>
        <p>
          Quarantine Tutors
          <br />
          __________
          <br />
          __________
        </p>
      </PolicySection>

      <PolicySection heading="11. How Can You Review, Update, Or Delete The Data We Collect From You?">
        <p>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information, please
          visit:{" "}
          <a href="https://reidf.net" target="_blank" rel="noopener noreferrer">
            https://reidf.net
          </a>
          . We will respond to your request within 30 days. This privacy policy
          was created using{" "}
          <a
            href="https://termly.io/products/privacy-policy-generator/?ftseo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termly&apos;s Privacy Policy Generator
          </a>
          .
        </p>
      </PolicySection>
    </PrivacyPolicyLayout>
  );
}

