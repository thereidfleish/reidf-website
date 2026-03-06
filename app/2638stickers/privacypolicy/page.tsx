import PrivacyPolicyLayout, {
  PolicySection,
  PolicyList,
} from "@/app/components/PrivacyPolicyLayout";

export const metadata = { title: "2638 Stickers Privacy Policy" };

export default function Stickers2638PrivacyPolicyPage() {
  return (
    <PrivacyPolicyLayout title="Privacy Policy">
      <p>Effective date: April 23, 2019</p>
      <p>
        2638 Stickers (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the 2638
        Stickers mobile application (the &ldquo;Service&rdquo;).
      </p>
      <p>
        This page informs you of our policies regarding the collection, use,
        and disclosure of personal data when you use our Service and the
        choices you have associated with that data. Our Privacy Policy for 2638
        Stickers is created with the help of the{" "}
        <a
          href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free Privacy Policy Generator
        </a>
        .
      </p>
      <p>
        We use your data to provide and improve the Service. By using the
        Service, you agree to the collection and use of information in
        accordance with this policy. Unless otherwise defined in this Privacy
        Policy, terms used in this Privacy Policy have the same meanings as in
        our Terms and Conditions.
      </p>

      <PolicySection heading="Information Collection And Use">
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <PolicySection heading="Types of Data Collected" level={3}>
          <PolicySection heading="Personal Data" level={4}>
            <p>
              While using our Service, we may ask you to provide us with
              certain personally identifiable information that can be used to
              contact or identify you (&ldquo;Personal Data&rdquo;). Personally
              identifiable information may include, but is not limited to:
            </p>
            <PolicyList items={["Cookies and Usage Data"]} />
          </PolicySection>
          <PolicySection heading="Usage Data" level={4}>
            <p>
              When you access the Service by or through a mobile device, we may
              collect certain information automatically, including, but not
              limited to, the type of mobile device you use, your mobile device
              unique ID, the IP address of your mobile device, your mobile
              operating system, the type of mobile Internet browser you use,
              unique device identifiers and other diagnostic data
              (&ldquo;Usage Data&rdquo;).
            </p>
          </PolicySection>
          <PolicySection heading="Tracking &amp; Cookies Data" level={4}>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
            </p>
            <p>
              Cookies are files with small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
            <p>Examples of Cookies we use:</p>
            <PolicyList
              items={[
                "Session Cookies. We use Session Cookies to operate our Service.",
                "Preference Cookies. We use Preference Cookies to remember your preferences and various settings.",
                "Security Cookies. We use Security Cookies for security purposes.",
              ]}
            />
          </PolicySection>
        </PolicySection>
      </PolicySection>

      <PolicySection heading="Use of Data">
        <p>2638 Stickers uses the collected data for various purposes:</p>
        <PolicyList
          items={[
            "To provide and maintain the Service",
            "To notify you about changes to our Service",
            "To allow you to participate in interactive features of our Service when you choose to do so",
            "To provide customer care and support",
            "To provide analysis or valuable information so that we can improve the Service",
            "To monitor the usage of the Service",
            "To detect, prevent and address technical issues",
          ]}
        />
      </PolicySection>

      <PolicySection heading="Transfer Of Data">
        <p>
          Your information, including Personal Data, may be transferred to
          &mdash; and maintained on &mdash; computers located outside of your
          state, province, country or other governmental jurisdiction where the
          data protection laws may differ than those from your jurisdiction.
        </p>
        <p>
          If you are located outside United States and choose to provide
          information to us, please note that we transfer the data, including
          Personal Data, to United States and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>
        <p>
          2638 Stickers will take all steps reasonably necessary to ensure that
          your data is treated securely and in accordance with this Privacy
          Policy and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>
      </PolicySection>

      <PolicySection heading="Disclosure Of Data">
        <PolicySection heading="Legal Requirements" level={3}>
          <p>
            2638 Stickers may disclose your Personal Data in the good faith
            belief that such action is necessary to:
          </p>
          <PolicyList
            items={[
              "To comply with a legal obligation",
              "To protect and defend the rights or property of 2638 Stickers",
              "To prevent or investigate possible wrongdoing in connection with the Service",
              "To protect the personal safety of users of the Service or the public",
              "To protect against legal liability",
            ]}
          />
        </PolicySection>
      </PolicySection>

      <PolicySection heading="Security Of Data">
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Data, we cannot guarantee
          its absolute security.
        </p>
      </PolicySection>

      <PolicySection heading="Service Providers">
        <p>
          We may employ third party companies and individuals to facilitate our
          Service (&ldquo;Service Providers&rdquo;), to provide the Service on
          our behalf, to perform Service-related services or to assist us in
          analyzing how our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </p>
      </PolicySection>

      <PolicySection heading="Links To Other Sites">
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party&apos;s site. We strongly advise you to review the Privacy
          Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
      </PolicySection>

      <PolicySection heading="Children's Privacy">
        <p>
          Our Service does not address anyone under the age of 18
          (&ldquo;Children&rdquo;).
        </p>
        <p>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </p>
      </PolicySection>

      <PolicySection heading="Changes To This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          &ldquo;effective date&rdquo; at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </PolicySection>

      <PolicySection heading="Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <PolicyList
          items={[
            <>
              By email:{" "}
              <a href="mailto:reidfleishman5@gmail.com">
                reidfleishman5@gmail.com
              </a>
            </>,
          ]}
        />
      </PolicySection>
    </PrivacyPolicyLayout>
  );
}

