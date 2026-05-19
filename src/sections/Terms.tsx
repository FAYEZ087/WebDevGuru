import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalCustom.css';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper-custom">
      <header className="legal-nav-custom">
        <Link to="/" className="legal-logo-custom">WebDev<span>Guru</span></Link>
        <Link to="/" className="legal-back-link-custom">Back to Home</Link>
      </header>

      <div className="page-hero-custom" data-watermark="TERMS">
        <div className="label-custom">Legal · Terms</div>
        <h1 className="hero-title-custom">Terms of Service</h1>
        <div className="meta-custom">
          <div className="meta-item-custom">Effective Date <strong>January 1, 2025</strong></div>
          <div className="meta-item-custom">Last Updated <strong>May 2025</strong></div>
          <div className="meta-item-custom">Governing Law <strong>India</strong></div>
        </div>
      </div>

      <div className="layout-custom">
        <nav className="toc-custom" aria-label="Table of contents">
          <div className="toc-title-custom">Contents</div>
          <ol>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#engagement">Project Engagement</a></li>
            <li><a href="#payment">Payment Terms</a></li>
            <li><a href="#deliverables">Deliverables &amp; IP</a></li>
            <li><a href="#revisions">Revisions &amp; Scope</a></li>
            <li><a href="#client-obligations">Client Obligations</a></li>
            <li><a href="#confidentiality">Confidentiality</a></li>
            <li><a href="#warranties">Warranties &amp; Liability</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#dispute">Dispute Resolution</a></li>
            <li><a href="#general">General Provisions</a></li>
          </ol>
        </nav>

        <main className="content-custom">
          <section id="acceptance">
            <div className="section-number-custom">01 / Acceptance</div>
            <h2>Acceptance of Terms</h2>
            <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client") and WebDevGuru Studio ("WebDevGuru", "we", "us", "our"), a web design and development studio based in India.</p>
            <div className="highlight-box-custom">
              <p>By visiting our website, booking a scope call, signing a project proposal, or making a payment, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
            </div>
            <p>These Terms apply to all visitors, enquirers, and paying clients. Project-specific terms in a signed Statement of Work (SOW) or proposal take precedence over these general Terms where there is a conflict.</p>
          </section>

          <section id="services">
            <div className="section-number-custom">02 / Services</div>
            <h2>Our Services</h2>
            <p>WebDevGuru provides bespoke digital design and development services including, but not limited to:</p>
            <ul>
              <li>Conversion-focused website design and development (Next.js, React, Webflow)</li>
              <li>D2C Shopify store design and theme customisation</li>
              <li>SaaS marketing site and landing page development</li>
              <li>UI/UX design, brand identity integration, and copywriting direction</li>
              <li>Technical SEO implementation, schema markup, and metadata architecture</li>
              <li>CMS integration (Sanity.io, Contentful, Shopify)</li>
              <li>Post-launch maintenance and performance optimisation retainers</li>
            </ul>
            <p>Specific deliverables for any engagement are defined in the project proposal or Statement of Work signed by both parties prior to commencement.</p>
          </section>

          <section id="engagement">
            <div className="section-number-custom">03 / Engagement</div>
            <h2>Project Engagement Process</h2>
            <h3>Scope Call</h3>
            <p>All projects begin with a complimentary scope call to understand your requirements, timeline, and budget. This call is non-binding. No work commences until a proposal is accepted and a deposit is received.</p>

            <h3>Proposal &amp; Agreement</h3>
            <p>Following the scope call, we issue a written proposal outlining scope, deliverables, timeline, pricing, and revision rounds. Your acceptance (via email, digital signature, or payment of deposit) constitutes agreement to the proposal and these Terms.</p>

            <h3>Kickoff &amp; Timeline</h3>
            <p>Work begins within 3–5 business days of receiving the agreed deposit. Project timelines are estimates based on normal client responsiveness. Delays caused by late feedback, missing assets, or unresponsive clients will extend the timeline proportionally without penalty to WebDevGuru.</p>

            <div className="highlight-box-custom">
              <p>Our standard delivery timeline is <strong>21 calendar days</strong> from kickoff for a complete website, subject to the complexity defined in the proposal and timely client cooperation.</p>
            </div>
          </section>

          <section id="payment">
            <div className="section-number-custom">04 / Payment</div>
            <h2>Payment Terms</h2>

            <div className="browser-grid-custom">
              <div className="browser-card-custom">
                <div className="browser-name-custom">Launch Plan — ₹15,000</div>
                <p>50% deposit on project start. 50% balance on final delivery before site goes live.</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Growth Plan — ₹35,000</div>
                <p>50% deposit on project start. 25% at design approval. 25% balance on final delivery.</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Scale Plan — Custom</div>
                <p>Payment schedule defined in the signed proposal. Typically milestone-based.</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Retainer / Maintenance</div>
                <p>Billed monthly in advance via Razorpay subscription or manual invoice.</p>
              </div>
            </div>

            <h3>Accepted Payment Methods</h3>
            <p>We accept bank transfers (NEFT/IMPS/UPI), Razorpay (cards, UPI, net banking), and international wire transfers. All prices are in INR unless otherwise stated. International clients will be invoiced in USD at the prevailing exchange rate.</p>

            <h3>Late Payments</h3>
            <p>Invoices are due within 7 days of issuance. Payments overdue by more than 14 days will incur a late fee of 1.5% per month. WebDevGuru reserves the right to pause work on any project with outstanding balances.</p>

            <h3>Non-Refundable Deposit</h3>
            <div className="warning-box-custom">
              <p>All deposits are <strong>non-refundable</strong>. They compensate WebDevGuru for time reserved and preliminary work performed. If a client cancels after the deposit is paid, no refund will be issued for that deposit amount.</p>
            </div>
            <p>Read <Link to="/refund">Refund Policy</Link> for more information about refunds.</p>
          </section>

          <section id="deliverables">
            <div className="section-number-custom">05 / IP &amp; Deliverables</div>
            <h2>Deliverables &amp; Intellectual Property</h2>

            <h3>Transfer of Ownership</h3>
            <p>Upon receipt of final payment in full, WebDevGuru transfers to the Client all ownership rights to the final website code, design files, and assets created specifically for the project ("Deliverables"), except as noted below.</p>

            <h3>WebDevGuru Retains Rights To:</h3>
            <ul>
              <li>All pre-existing code libraries, UI frameworks, and internal toolkits used in the build</li>
              <li>The right to display the completed project in our portfolio, case studies, and marketing materials (unless a confidentiality clause is signed)</li>
              <li>Any proprietary animation systems, GLSL shaders, or internal component libraries incorporated into the project</li>
            </ul>

            <h3>Third-Party Assets</h3>
            <p>Stock images, icons, fonts, and plugins licensed from third-party providers remain subject to those providers' licensing terms. The client is responsible for ensuring continued compliance with any third-party licences after project delivery.</p>

            <h3>Open Source</h3>
            <p>Our projects often incorporate open-source libraries (React, Next.js, Framer Motion, etc.). These are governed by their respective licences (MIT, Apache, etc.) and are not subject to this IP clause.</p>
          </section>

          <section id="revisions">
            <div className="section-number-custom">06 / Revisions</div>
            <h2>Revisions &amp; Scope Changes</h2>

            <h3>Included Revision Rounds</h3>
            <p>Each plan includes a defined number of revision rounds as specified in the proposal:</p>
            <ul>
              <li><strong>Launch Plan:</strong> 2 rounds of design revisions, 1 round of development revisions</li>
              <li><strong>Growth Plan:</strong> 3 rounds of design revisions, 2 rounds of development revisions</li>
              <li><strong>Scale Plan:</strong> As defined in the proposal</li>
            </ul>

            <h3>What Counts as a Revision</h3>
            <p>A revision round is a consolidated set of feedback on the current deliverable. Feedback must be submitted in a single document or message. Piecemeal feedback over multiple messages may be grouped into a single revision round at our discretion.</p>

            <h3>Scope Creep</h3>
            <p>Any request that adds functionality, pages, or features not defined in the original proposal is considered a scope change. Scope changes are quoted and billed separately, and extend the delivery timeline accordingly. We will not commence scope-change work without written confirmation from the client.</p>
          </section>

          <section id="client-obligations">
            <div className="section-number-custom">07 / Client Obligations</div>
            <h2>Client Obligations</h2>
            <p>A successful project requires active collaboration. As a client, you agree to:</p>
            <ul>
              <li>Provide all required content (copy, images, logos, brand assets) within 5 business days of project kickoff unless a content creation service is included in your plan</li>
              <li>Respond to review requests and provide feedback within 3 business days</li>
              <li>Designate a single point of contact for the project to avoid conflicting instructions</li>
              <li>Ensure that all content and materials you provide do not infringe the intellectual property rights of any third party</li>
              <li>Provide accurate and complete information about your business, target audience, and technical requirements</li>
              <li>Make payments on schedule as agreed in the proposal</li>
            </ul>
            <div className="highlight-box-custom">
              <p>If the client fails to provide required materials or feedback within the agreed timeframe, WebDevGuru may re-schedule the project, and the original delivery deadline will no longer apply.</p>
            </div>
          </section>

          <section id="confidentiality">
            <div className="section-number-custom">08 / Confidentiality</div>
            <h2>Confidentiality</h2>

            <h3>Mutual Confidentiality</h3>
            <p>Both parties agree to treat as confidential any non-public information shared during the engagement, including business strategies, pricing, technical architecture, and client data. This obligation survives the termination of the project for a period of 2 years.</p>

            <h3>Portfolio Right</h3>
            <p>Unless a specific NDA is signed, WebDevGuru retains the right to feature the completed work in our portfolio, on social media, and in case studies. We will not share confidential business metrics without your permission.</p>

            <h3>NDA Requests</h3>
            <p>Clients requiring a full Non-Disclosure Agreement may request one before the scope call. NDA engagements are available on Scale Plan and custom enterprise projects.</p>
          </section>

          <section id="warranties">
            <div className="section-number-custom">09 / Warranties</div>
            <h2>Warranties &amp; Limitation of Liability</h2>

            <h3>What We Warrant</h3>
            <ul>
              <li>Deliverables will be original work or properly licensed third-party components</li>
              <li>The website will function as described in the proposal on modern browsers (latest 2 versions of Chrome, Safari, Firefox, Edge) at the time of delivery</li>
              <li>We will perform services with reasonable skill, care, and professionalism</li>
            </ul>

            <h3>What We Do Not Warrant</h3>
            <ul>
              <li>Specific business outcomes, conversion rates, revenue growth, or SEO rankings — these depend on factors beyond our control</li>
              <li>Uninterrupted or error-free operation after delivery — websites require ongoing maintenance</li>
              <li>Compatibility with future browser versions, OS updates, or third-party API changes after delivery</li>
            </ul>

            <h3>Limitation of Liability</h3>
            <div className="warning-box-custom">
              <p>To the maximum extent permitted by applicable law, WebDevGuru' total liability for any claim arising out of or related to these Terms shall not exceed the total fees paid by the client for the specific project in question. We shall not be liable for any indirect, incidental, consequential, or punitive damages.</p>
            </div>
          </section>

          <section id="termination">
            <div className="section-number-custom">10 / Termination</div>
            <h2>Termination</h2>

            <h3>Termination by Client</h3>
            <p>A client may terminate a project at any time with 7 days written notice. Upon termination:</p>
            <ul>
              <li>All work completed to date will be invoiced at our standard day rate</li>
              <li>The non-refundable deposit is retained</li>
              <li>Completed deliverables will be delivered upon payment of any outstanding balance</li>
            </ul>

            <h3>Termination by WebDevGuru</h3>
            <p>WebDevGuru reserves the right to terminate an engagement if:</p>
            <ul>
              <li>The client fails to make payment within 7 days of a due date</li>
              <li>The client provides content or instructions that are illegal, defamatory, or violate third-party rights</li>
              <li>The client's behaviour is abusive, threatening, or unreasonable toward our team</li>
            </ul>
            <p>In such cases, WebDevGuru will deliver all work completed to date and retain all fees paid up to that point.</p>

            <h3>Project Abandonment</h3>
            <p>If a client becomes unresponsive for more than 7 consecutive days without notice, the project will be considered abandoned. Any outstanding balance becomes immediately due. Resumption of an abandoned project is subject to availability and may incur a restart fee.</p>
          </section>

          <section id="dispute">
            <div className="section-number-custom">11 / Disputes</div>
            <h2>Dispute Resolution</h2>

            <h3>Good Faith Resolution</h3>
            <p>Both parties agree to attempt to resolve any dispute arising from these Terms through good-faith negotiation within 30 days of the dispute being raised in writing.</p>

            <h3>Mediation</h3>
            <p>If informal resolution fails, both parties agree to attempt mediation before initiating legal proceedings. Mediation costs will be shared equally between the parties.</p>

            <h3>Governing Law &amp; Jurisdiction</h3>
            <p>These Terms are governed by the laws of India. Any legal proceedings that cannot be resolved through mediation shall be subject to the exclusive jurisdiction of the courts located in India, as applicable to the registered location of WebDevGuru Studio.</p>

            <div className="highlight-box-custom">
              <p>We genuinely believe disputes are almost always resolvable through communication. We are committed to being fair and transparent throughout any disagreement.</p>
            </div>
          </section>

          <section id="general">
            <div className="section-number-custom">12 / General</div>
            <h2>General Provisions</h2>

            <h3>Entire Agreement</h3>
            <p>These Terms, together with any signed proposal or Statement of Work, constitute the entire agreement between the parties and supersede all prior discussions, representations, or agreements.</p>

            <h3>Amendments</h3>
            <p>We may update these Terms from time to time. The current version will always be published at webdevguru.tech/terms. Continued use of our services after an update constitutes acceptance of the revised Terms.</p>

            <h3>Severability</h3>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>

            <h3>No Waiver</h3>
            <p>Failure by either party to enforce any right under these Terms shall not constitute a waiver of that right.</p>

            <h3>Force Majeure</h3>
            <p>Neither party shall be liable for delays caused by circumstances beyond their reasonable control, including natural disasters, government actions, internet outages, or pandemic-related disruptions.</p>

          </section>
        </main>
      </div>
    </div>
  );
};

export default Terms;
