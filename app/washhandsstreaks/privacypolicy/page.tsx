import PrivacyPolicyLayout, {
  PolicySection,
  PolicyList,
} from "@/app/components/PrivacyPolicyLayout";

export const metadata = { title: "Wash Hands Streaks Privacy Policy" };

export default function WashHandsStreaksPrivacyPolicyPage() {
  return (
    <PrivacyPolicyLayout title="Privacy Notice">
      <p>Last updated March 22, 2020</p>
      <p>
        Thank you for choosing to be part of our community at __________
        (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are
        committed to protecting your personal information and your right to
        privacy. If you have any questions or concerns about our notice, or our
        practices with regards to your personal information, please contact us
        at{" "}
        <a href="mailto:reidfleishman5@gmail.com">reidfleishman5@gmail.com</a>.
      </p>
      <p>
        When you visit our mobile application, and use our services, you trust
        us with your personal information. We take your privacy very seriously.
        In this privacy notice, we seek to explain to you in the clearest way
        possible what information we collect, how we use it and what rights you
        have in relation to it. We hope you take some time to read through it
        carefully, as it is important. If there are any terms in this privacy
        notice that you do not agree with, please discontinue use of our Apps
        and our services.
      </p>
      <p>
        This privacy notice applies to all information collected through our
        mobile application, (&ldquo;Apps&rdquo;), and/or any related services,
        sales, marketing or events (we refer to them collectively in this
        privacy notice as the &ldquo;Services&rdquo;).
      </p>
      <p>
        Please read this privacy notice carefully as it will help you make
        informed decisions about sharing your personal information with us.
      </p>

      <PolicySection heading="Table of Contents">
        <ol className="list-decimal list-inside flex flex-col gap-1 pl-2">
          <li>What Information Do We Collect?</li>
          <li>Will Your Information Be Shared With Anyone?</li>
          <li>How Long Do We Keep Your Information?</li>
          <li>Do We Collect Information From Minors?</li>
          <li>What Are Your Privacy Rights?</li>
          <li>Controls For Do-Not-Track Features</li>
          <li>Do California Residents Have Specific Privacy Rights?</li>
          <li>Do We Make Updates To This Policy?</li>
          <li>How Can You Contact Us About This Policy?</li>
        </ol>
      </PolicySection>

      <PolicySection heading="1. What Information Do We Collect?">
        <PolicySection heading="Information automatically collected" level={3}>
          <p>
            <em>In Short:</em> &nbsp; Some information &mdash; such as IP
            address and/or browser and device characteristics &mdash; is
            collected automatically when you visit our Apps.
          </p>
          <p>
            We automatically collect certain information when you visit, use or
            navigate the Apps. This information does not reveal your specific
            identity (like your name or contact information) but may include
            device and usage information, such as your IP address, browser and
            device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about
            how and when you use our Apps and other technical information. This
            information is primarily needed to maintain the security and
            operation of our Apps, and for our internal analytics and reporting
            purposes.
          </p>
        </PolicySection>
        <PolicySection heading="Information collected through our Apps" level={3}>
          <p>
            <em>In Short:</em> &nbsp; We may collect information regarding your
            push notifications, when you use our apps.
          </p>
          <p>
            If you use our Apps, we may also collect the following information:
          </p>
          <PolicyList
            items={[
              <>
                <strong>Push Notifications.</strong> We may request to send you
                push notifications regarding your account or the mobile
                application. If you wish to opt-out from receiving these types
                of communications, you may turn them off in your device&apos;s
                settings.
              </>,
            ]}
          />
        </PolicySection>
      </PolicySection>

      <PolicySection heading="2. Will Your Information Be Shared With Anyone?">
        <p>
          <em>In Short:</em> &nbsp; We only share information with your consent,
          to comply with laws, to provide you with services, to protect your
          rights, or to fulfill business obligations.
        </p>
        <p>
          We may process or share data based on the following legal basis:
        </p>
        <PolicyList
          items={[
            <>
              <strong>Consent:</strong> We may process your data if you have
              given us specific consent to use your personal information in a
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
              <strong>Vendors, Consultants and Other Third-Party Service
              Providers.</strong> We may share your data with third party
              vendors, service providers, contractors or agents who perform
              services for us or on our behalf and require access to such
              information to do that work. Examples include: payment processing,
              data analysis, email delivery, hosting services, customer service
              and marketing efforts. We may allow selected third parties to use
              tracking technology on the Apps, which will enable them to collect
              data about how you interact with the Apps over time. This
              information may be used to, among other things, analyze and track
              data, determine the popularity of certain content and better
              understand online activity. Unless described in this Policy, we do
              not share, sell, rent or trade any of your information with third
              parties for their promotional purposes.
            </>,
            <>
              <strong>Business Transfers.</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </>,
            <>
              <strong>Third-Party Advertisers.</strong> We may use third-party
              advertising companies to serve ads when you visit the Apps. These
              companies may use information about your visits to our Website(s)
              and other websites that are contained in web cookies and other
              tracking technologies in order to provide advertisements about
              goods and services of interest to you.
            </>,
          ]}
        />
      </PolicySection>

      <PolicySection heading="3. How Long Do We Keep Your Information?">
        <p>
          <em>In Short:</em> &nbsp; We keep your information for as long as
          necessary to fulfill the purposes outlined in this privacy notice
          unless otherwise required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this policy
          will require us keeping your personal information for longer than
          __________.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize it, or, if
          this is not possible (for example, because your personal information
          has been stored in backup archives), then we will securely store your
          personal information and isolate it from any further processing until
          deletion is possible.
        </p>
      </PolicySection>

      <PolicySection heading="4. Do We Collect Information From Minors?">
        <p>
          <em>In Short:</em> &nbsp; We do not knowingly collect data from or
          market to children under 18 years of age.
        </p>
        <p>
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Apps, you represent that you are at least
          18 or that you are the parent or guardian of such a minor and consent
          to such minor dependent&apos;s use of the Apps. If we learn that
          personal information from users less than 18 years of age has been
          collected, we will deactivate the account and take reasonable measures
          to promptly delete such data from our records. If you become aware of
          any data we have collected from children under age 18, please contact
          us at{" "}
          <a href="mailto:reidfleishman5@gmail.com">
            reidfleishman5@gmail.com
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection heading="5. What Are Your Privacy Rights?">
        <p>
          <em>In Short:</em> &nbsp; You may review, change, or terminate your
          account at any time.
        </p>
        <p>
          If you are resident in the European Economic Area and you believe we
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
      </PolicySection>

      <PolicySection heading="6. Controls For Do-Not-Track Features">
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&ldquo;DNT&rdquo;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. No
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </p>
      </PolicySection>

      <PolicySection heading="7. Do California Residents Have Specific Privacy Rights?">
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
          registered account with the Apps, you have the right to request
          removal of unwanted data that you publicly post on the Apps. To
          request removal of such data, please contact us using the contact
          information provided below, and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Apps, but
          please be aware that the data may not be completely or comprehensively
          removed from our systems.
        </p>
      </PolicySection>

      <PolicySection heading="8. Do We Make Updates To This Policy?">
        <p>
          <em>In Short:</em> &nbsp; Yes, we will update this policy as necessary
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

      <PolicySection heading="9. How Can You Contact Us About This Policy?">
        <p>
          If you have questions or comments about this policy, you may email us
          at{" "}
          <a href="mailto:reidfleishman5@gmail.com">
            reidfleishman5@gmail.com
          </a>{" "}
          or by post to:
        </p>
        <p>
          __________
          <br />
          __________
          <br />
          __________
        </p>
        <p>
          <strong>
            How Can You Review, Update, Or Delete The Data We Collect From You?
          </strong>
        </p>
        <p>
          Based on the laws of some countries, you may have the right to request
          access to the personal information we collect from you, change that
          information, or delete it in some circumstances. To request to review,
          update, or delete your personal information, please submit a request
          form by clicking{" "}
          <a
            href="https://app.termly.io/notify/b1606b01-c6c9-464e-9428-b1684daf4bbf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . We will respond to your request within 30 days. This privacy policy
          was created using{" "}
          <a
            href="https://termly.io/products/privacy-policy-generator/"
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
