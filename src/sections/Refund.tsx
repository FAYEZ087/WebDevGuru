import { useEffect } from 'react';
import './LegalCustom.css';
import { Link } from 'lucide-react';

const Refund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-custom">
        <header className="legal-nav-custom">
          <Link to="/" className="legal-logo-custom">WebDev<span>Guru</span></Link>
          <Link to="/" className="legal-back-link-custom">Back to Home</Link>
        </header>
      <div className="page-hero-custom" data-watermark="REFUND">
        <div className="label-mono-custom gold-custom">Legal · Refunds</div>
        <h1>Refund Policy</h1>
        <div className="meta-custom">
          <div className="meta-item-custom">Effective Date <strong>January 1, 2025</strong></div>
          <div className="meta-item-custom">Last Updated <strong>May 2025</strong></div>
          <div className="meta-item-custom">Applies To <strong>All Plans</strong></div>
        </div>
      </div>

      <div className="layout-custom">
        <nav className="toc-custom" aria-label="Table of contents">
          <div className="toc-title-custom">Contents</div>
          <ol>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#deposit">Non-Refundable Deposit</a></li>
            <li><a href="#scenarios">Refund Scenarios</a></li>
            <li><a href="#partial">Partial Refunds</a></li>
            <li><a href="#webdevguru-fault">If We Fail to Deliver</a></li>
            <li><a href="#revisions">Revisions vs Refunds</a></li>
            <li><a href="#chargebacks">Chargeback Policy</a></li>
            <li><a href="#retainers">Retainer Refunds</a></li>
            <li><a href="#process">How to Request</a></li>
          </ol>
        </nav>

        <main className="content-custom">
          <section id="overview">
            <div className="section-number-custom">01 / Overview</div>
            <h2>Our Refund Philosophy</h2>
            <p>WebDevGuru invests significant time, creative energy, and resources into every project — much of it front-loaded before a single pixel is shown to the client. Our refund policy reflects this reality while remaining fair to all parties.</p>
            <div className="highlight-box-custom">
              <p>We are a service business, not a product store. Once skilled work has been performed, it cannot be "returned." This policy exists to protect both parties and ensure clarity before a project begins.</p>
            </div>
            <p>If you have concerns at any stage of a project, we strongly encourage you to raise them directly with your project lead. Most issues are resolvable without a refund.</p>
          </section>

          <section id="deposit">
            <div className="section-number-custom">02 / Deposit</div>
            <h2>Non-Refundable Deposit</h2>
            <div className="danger-box-custom">
              <p><strong>All project deposits are strictly non-refundable.</strong> By paying the deposit, you acknowledge and accept this condition unconditionally.</p>
            </div>
            <h3>Why the Deposit is Non-Refundable</h3>
            <p>When you pay your deposit, WebDevGuru immediately:</p>
            <ul>
              <li>Reserves your spot in our production schedule, turning away other clients for that window</li>
              <li>Assigns a project lead and design team to your engagement</li>
              <li>Begins discovery, research, and planning work</li>
              <li>Purchases any required third-party assets, fonts, or tools specific to your project</li>
              <li>Invests time in onboarding calls, brief documents, and project setup</li>
            </ul>
            <p>This work begins the moment your deposit is received. Even if you cancel on day one, this time and opportunity cost cannot be recovered — hence the non-refundable nature of the deposit.</p>
            <div className="warning-box-custom">
              <p>Deposit amounts by plan: <strong>Launch (₹17,500)</strong> · <strong>Growth (₹37,500)</strong> · <strong>Scale</strong> as defined in your proposal. These amounts are non-refundable under all circumstances.</p>
            </div>
          </section>

          <section id="scenarios">
            <div className="section-number-custom">03 / Scenarios</div>
            <h2>Refund Scenarios at a Glance</h2>
            <table className="scenario-table-custom">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Deposit</th>
                  <th>Balance Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Client cancels before kickoff</strong></td>
                  <td><span className="badge-custom badge-no-custom">No Refund</span></td>
                  <td><span className="badge-custom badge-yes-custom">Full Refund</span></td>
                </tr>
                <tr>
                  <td><strong>Client cancels mid-project</strong></td>
                  <td><span className="badge-custom badge-no-custom">No Refund</span></td>
                  <td><span className="badge-custom badge-partial-custom">Pro-Rata</span></td>
                </tr>
                <tr>
                  <td><strong>Client dissatisfied after delivery</strong></td>
                  <td><span className="badge-custom badge-no-custom">No Refund</span></td>
                  <td><span className="badge-custom badge-no-custom">No Refund</span></td>
                </tr>
                <tr>
                  <td><strong>WebDevGuru fails to deliver agreed scope</strong></td>
                  <td><span className="badge-custom badge-partial-custom">Partial</span></td>
                  <td><span className="badge-custom badge-yes-custom">Full Refund</span></td>
                </tr>
                <tr>
                  <td><strong>WebDevGuru terminates project</strong></td>
                  <td><span className="badge-custom badge-partial-custom">Pro-Rata</span></td>
                  <td><span className="badge-custom badge-yes-custom">Full Refund</span></td>
                </tr>
                <tr>
                  <td><strong>Duplicate / erroneous payment</strong></td>
                  <td><span className="badge-custom badge-yes-custom">Full Refund</span></td>
                  <td><span className="badge-custom badge-yes-custom">Full Refund</span></td>
                </tr>
                <tr>
                  <td><strong>Retainer cancelled with notice</strong></td>
                  <td>N/A</td>
                  <td><span className="badge-custom badge-partial-custom">Pro-Rata</span></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="partial">
            <div className="section-number-custom">04 / Partial Refunds</div>
            <h2>Partial Refunds (Mid-Project Cancellation)</h2>
            <p>If a client cancels a project after kickoff but before final delivery, the following applies:</p>
            <ul>
              <li>All work completed to the cancellation date is billed at our standard rate</li>
              <li>The deposit is retained and applied toward the work completed</li>
              <li>Any balance paid beyond the deposit that exceeds the value of completed work will be refunded</li>
              <li>A cancellation invoice will be issued within 5 business days detailing the work completed and any amount due or refundable</li>
            </ul>
            <h3>How "Work Completed" is Calculated</h3>
            <p>We track project progress across defined milestones (Discovery, Design, Development, QA, Launch). The percentage of milestones completed at the time of cancellation determines the billable amount, calculated against the total project value.</p>
            <div className="highlight-box-custom">
              <p>All completed work — wireframes, design files, code, assets — will be delivered to the client upon settlement of any outstanding balance, regardless of whether the project was completed.</p>
            </div>
          </section>

          <section id="webdevguru-fault">
            <div className="section-number-custom">05 / Our Fault</div>
            <h2>If WebDevGuru Fails to Deliver</h2>
            <p>We hold ourselves to a high standard. If WebDevGuru materially fails to deliver the agreed scope within a reasonable extended timeline, the following remedies apply:</p>
            <h3>What Qualifies as a Failure to Deliver</h3>
            <ul>
              <li>Failure to deliver the agreed website after 2× the contracted timeline with no client-caused delay</li>
              <li>Delivering a website that materially does not match the signed proposal scope</li>
              <li>Abandonment of the project by WebDevGuru without cause</li>
            </ul>
            <h3>Remedies</h3>
            <ul>
              <li><strong>First:</strong> We will work to complete the outstanding deliverables at no additional cost</li>
              <li><strong>If completion is not possible:</strong> A partial or full refund of fees paid (excluding the deposit) will be issued, proportional to the undelivered scope</li>
              <li><strong>In full abandonment cases:</strong> A pro-rata refund of the deposit may also be considered at WebDevGuru's discretion</li>
            </ul>
            <div className="warning-box-custom">
              <p>Client-caused delays (late feedback, missing assets, unresponsiveness) do not constitute a failure to deliver by WebDevGuru and do not qualify for refunds.</p>
            </div>
          </section>

          <section id="revisions">
            <div className="section-number-custom">06 / Revisions vs Refunds</div>
            <h2>Revisions Are Not Refund Grounds</h2>
            <p>Dissatisfaction with a design direction or subjective preference change is not grounds for a refund. This is why we offer structured revision rounds.</p>
            <ul>
              <li>If you dislike the design direction, request a revision — that is what revision rounds exist for</li>
              <li>If you change your mind about the project concept after work has begun, this is a scope change, not a refund scenario</li>
              <li>If you feel the deliverable doesn't match the brief, raise it formally and we will address it within the revision process</li>
            </ul>
            <p>WebDevGuru will always attempt to resolve dissatisfaction through additional work before any refund discussion. <strong>Refunds are a last resort, not a first response.</strong></p>
          </section>

          <section id="chargebacks">
            <div className="section-number-custom">07 / Chargebacks</div>
            <h2>Chargeback Policy</h2>
            <div className="danger-box-custom">
              <p>Filing a chargeback or payment dispute without first contacting WebDevGuru is a violation of these Terms and may result in immediate termination of services, withholding of all deliverables, and legal action to recover the disputed amount plus associated fees.</p>
            </div>
            <h3>Before Filing a Dispute</h3>
            <p>If you have a payment concern, you must contact us and allow 7 business days for resolution before involving your bank or payment provider.</p>
            <h3>Fraudulent Chargebacks</h3>
            <p>We maintain detailed records of all project communications, deliverables, and milestones. In the event of a fraudulent chargeback, WebDevGuru will provide this evidence to the payment processor and pursue recovery through all available legal channels.</p>
            <h3>Legitimate Disputes</h3>
            <p>If a payment was made in error (duplicate charge, wrong amount), contact us immediately. We will resolve legitimate errors within 5 business days without requiring a formal dispute.</p>
          </section>

          <section id="retainers">
            <div className="section-number-custom">08 / Retainers</div>
            <h2>Retainer &amp; Maintenance Plan Refunds</h2>
            <p>Monthly maintenance and retainer plans are billed in advance. The following applies:</p>
            <ul>
              <li><strong>Cancellation with 14+ days notice:</strong> No charge for the following month; current month is non-refundable</li>
              <li><strong>Cancellation with less than 14 days notice:</strong> Current month billed in full; no further charges</li>
              <li><strong>Unused retainer hours:</strong> Do not roll over and are non-refundable at month end</li>
              <li><strong>Annual retainer cancellation:</strong> Pro-rata refund for unused months, minus a 10% early termination fee</li>
            </ul>
            <div className="highlight-box-custom">
              <p>To cancel a retainer, email <a href="mailto:hello@webdevguru.tech">hello@webdevguru.tech</a> with subject line "Retainer Cancellation — [Your Company Name]" at least 14 days before your next billing date.</p>
            </div>
          </section>

          <section id="process">
            <div className="section-number-custom">09 / Process</div>
            <h2>How to Request a Refund</h2>
            <p>To initiate a refund request, follow these steps:</p>
            <ul>
              <li><strong>Step 1:</strong> Email <a href="mailto:hello@webdevguru.tech">hello@webdevguru.tech</a> with subject line "Refund Request — [Your Project Name]"</li>
              <li><strong>Step 2:</strong> Include your full name, company name, invoice number, payment date, and the reason for your request</li>
              <li><strong>Step 3:</strong> We will acknowledge your request within 2 business days</li>
              <li><strong>Step 4:</strong> A review will be completed within 7 business days and you will be notified of the outcome</li>
              <li><strong>Step 5:</strong> Approved refunds are processed within 10 business days to the original payment method</li>
            </ul>
            <div className="highlight-box-custom">
              <p>Refunds to Indian bank accounts (NEFT/UPI) typically appear within 3–5 business days. Card refunds via Razorpay may take 5–10 business days depending on your bank.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Refund;
