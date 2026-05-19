import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalCustom.css';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper-custom">
      <header className="legal-nav-custom">
        <Link to="/" className="legal-logo-custom">WebDev<span>Guru</span></Link>
        <Link to="/" className="legal-back-link-custom">Back to Home</Link>
      </header>

      <div className="page-hero-custom" data-watermark="COOKIES">
        <div className="label-custom">Legal · Cookies</div>
        <h1 className="hero-title-custom">Cookie Policy</h1>
        <div className="meta-custom">
          <div className="meta-item-custom">Effective Date <strong>January 1, 2025</strong></div>
          <div className="meta-item-custom">Last Updated <strong>May 2025</strong></div>
          <div className="meta-item-custom">Applies To <strong>webdevguru.tech</strong></div>
        </div>
      </div>

      <div className="layout-custom">
        <nav className="toc-custom" aria-label="Table of contents">
          <div className="toc-title-custom">Contents</div>
          <ol>
            <li><a href="#what-are-cookies">What Are Cookies</a></li>
            <li><a href="#why-we-use">Why We Use Them</a></li>
            <li><a href="#types">Types We Use</a></li>
            <li><a href="#full-list">Full Cookie List</a></li>
            <li><a href="#third-party">Third-Party Cookies</a></li>
            <li><a href="#consent">Your Consent</a></li>
            <li><a href="#manage">Managing Cookies</a></li>
            <li><a href="#localstorage">localStorage &amp; Sessions</a></li>
            <li><a href="#updates">Policy Updates</a></li>
          </ol>
        </nav>

        <main className="content-custom">
          <section id="what-are-cookies">
            <div className="section-number-custom">01 / Basics</div>
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow the site to remember information about your visit — such as your preferred language, theme, or whether you have already accepted a cookie banner — making your next visit more efficient.</p>
            <p>Similar technologies include <strong>localStorage</strong> (browser-side key-value storage), <strong>sessionStorage</strong> (cleared when you close your tab), and <strong>tracking pixels</strong>. This policy covers all of these where relevant to webdevguru.tech.</p>
            <div className="highlight-box-custom">
              <p>WebDevGuru uses a minimal, privacy-first approach to cookies. We collect only what is necessary to operate and improve our website. We do not run advertising networks or sell cookie data to third parties.</p>
            </div>
          </section>

          <section id="why-we-use">
            <div className="section-number-custom">02 / Purpose</div>
            <h2>Why We Use Cookies</h2>
            <p>We use cookies and similar technologies for the following purposes:</p>
            <ul>
              <li><strong>Preference persistence</strong> — remembering your chosen theme (Sovelis, Reliesta, etc.) and locale (English/Hindi) between sessions</li>
              <li><strong>Analytics</strong> — understanding how visitors use our website so we can improve it (PostHog)</li>
              <li><strong>Campaign attribution</strong> — understanding which marketing channel brought you to our site (UTM cookies)</li>
              <li><strong>Performance monitoring</strong> — identifying slow pages or broken interactions</li>
              <li><strong>A/B testing</strong> — determining which version of our hero or pricing section performs better</li>
            </ul>
            <p>We do <strong>not</strong> use cookies for: targeted advertising, cross-site tracking, selling data to brokers, or fingerprinting.</p>
          </section>

          <section id="types">
            <div className="section-number-custom">03 / Types</div>
            <h2>Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>These are required for the website to function correctly. They cannot be disabled without breaking core features. They do not track you for analytics or advertising purposes.</p>

            <h3>Analytics Cookies</h3>
            <p>These help us understand visitor behaviour — which pages are most popular, where visitors drop off, and how they interact with our UI elements. We use PostHog, which is privacy-friendly and does not share data with ad networks. Analytics cookies are non-essential and require your consent.</p>

            <h3>Marketing / Attribution Cookies</h3>
            <p>When you arrive via a campaign link (e.g. an Instagram ad or email), we store the UTM parameters in a cookie for up to 30 days. This helps us understand which campaigns are effective. No personal data is stored in this cookie — only the campaign identifier.</p>
          </section>

          <section id="full-list">
            <div className="section-number-custom">04 / Full List</div>
            <h2>Complete Cookie List</h2>
            <div className="cookie-grid-custom">

              <div className="cookie-card-custom">
                <div className="cookie-card-header-custom">
                  <span className="cookie-name-custom">webdevguru_theme</span>
                  <span className="badge-custom badge-essential-custom">Essential</span>
                </div>
                <div className="cookie-detail-custom"><strong>Purpose:</strong> Stores your selected visual theme (e.g. Sovelis, Reliesta)</div>
                <div className="cookie-detail-custom"><strong>Storage:</strong> localStorage</div>
                <div className="cookie-detail-custom"><strong>Duration:</strong> Persistent (until cleared)</div>
                <div className="cookie-detail-custom"><strong>Provider:</strong> WebDevGuru (first-party)</div>
              </div>

              <div className="cookie-card-custom">
                <div className="cookie-card-header-custom">
                  <span className="cookie-name-custom">NEXT_LOCALE</span>
                  <span className="badge-custom badge-essential-custom">Essential</span>
                </div>
                <div className="cookie-detail-custom"><strong>Purpose:</strong> Stores your language preference (en / hi)</div>
                <div className="cookie-detail-custom"><strong>Storage:</strong> Cookie</div>
                <div className="cookie-detail-custom"><strong>Duration:</strong> 1 year</div>
                <div className="cookie-detail-custom"><strong>Provider:</strong> WebDevGuru / next-intl (first-party)</div>
              </div>

              <div className="cookie-card-custom">
                <div className="cookie-card-header-custom">
                  <span className="cookie-name-custom">ph_*</span>
                  <span className="badge-custom badge-analytics-custom">Analytics</span>
                </div>
                <div className="cookie-detail-custom"><strong>Purpose:</strong> PostHog analytics — tracks page views, session data, UI interaction events (CTA clicks, scroll depth, form opens)</div>
                <div className="cookie-detail-custom"><strong>Storage:</strong> Cookie + localStorage</div>
                <div className="cookie-detail-custom"><strong>Duration:</strong> 1 year</div>
                <div className="cookie-detail-custom"><strong>Provider:</strong> PostHog (third-party) — <a href="https://posthog.com/privacy" target="_blank" rel="noopener">Privacy Policy</a></div>
              </div>

              <div className="cookie-card-custom">
                <div className="cookie-card-header-custom">
                  <span className="cookie-name-custom">wm_utm</span>
                  <span className="badge-custom badge-marketing-custom">Marketing</span>
                </div>
                <div className="cookie-detail-custom"><strong>Purpose:</strong> Stores UTM campaign parameters (utm_source, utm_campaign) for conversion attribution</div>
                <div className="cookie-detail-custom"><strong>Storage:</strong> Cookie (set by Next.js middleware)</div>
                <div className="cookie-detail-custom"><strong>Duration:</strong> 30 days</div>
                <div className="cookie-detail-custom"><strong>Provider:</strong> WebDevGuru (first-party)</div>
              </div>

              <div className="cookie-card-custom">
                <div className="cookie-card-header-custom">
                  <span className="cookie-name-custom">wm_cookie_consent</span>
                  <span className="badge-custom badge-essential-custom">Essential</span>
                </div>
                <div className="cookie-detail-custom"><strong>Purpose:</strong> Records whether you have accepted or declined non-essential cookies, so the banner does not appear on every visit</div>
                <div className="cookie-detail-custom"><strong>Storage:</strong> Cookie</div>
                <div className="cookie-detail-custom"><strong>Duration:</strong> 1 year</div>
                <div className="cookie-detail-custom"><strong>Provider:</strong> WebDevGuru (first-party)</div>
              </div>

            </div>
          </section>

          <section id="third-party">
            <div className="section-number-custom">05 / Third-Party</div>
            <h2>Third-Party Cookies</h2>
            <p>The following third-party services may set cookies or similar tracking technologies when you use our website:</p>
            <ul>
              <li><strong>PostHog</strong> — Analytics and session recording. Data stored on PostHog's EU cloud servers. <a href="https://posthog.com/privacy" target="_blank" rel="noopener">Privacy Policy</a></li>
              <li><strong>Vercel</strong> — Our hosting provider may set performance-related cookies for edge routing. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></li>
              <li><strong>Formspree</strong> — If you submit a contact form, Formspree may set a session cookie during form submission. <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a></li>
            </ul>
            <p>We do not embed third-party advertising scripts, social media tracking pixels, or Google Analytics on our website.</p>
          </section>

          <section id="consent">
            <div className="section-number-custom">06 / Consent</div>
            <h2>Your Consent</h2>
            <p>When you first visit webdevguru.tech, you will see a cookie consent banner that looks like this:</p>

            <div className="banner-preview-custom">
              <div>
                <div className="banner-label-custom">Cookie Notice</div>
                <p>We use essential cookies to keep the site running and optional analytics cookies to improve it. No advertising. No third-party tracking.</p>
              </div>
              <div className="banner-btns-custom">
                <button className="btn-decline-custom">Decline</button>
                <button className="btn-accept-custom">Accept</button>
              </div>
            </div>

            <ul>
              <li><strong>Accept</strong> — Enables analytics (PostHog) and marketing attribution cookies in addition to essential ones</li>
              <li><strong>Decline</strong> — Only essential cookies are set; PostHog and UTM cookies are not loaded</li>
            </ul>
            <p>Your choice is stored in the <code>wm_cookie_consent</code> cookie for 1 year. You can change your preference at any time by clearing your browser cookies or contacting us.</p>
          </section>

          <section id="manage">
            <div className="section-number-custom">07 / Managing Cookies</div>
            <h2>How to Manage or Disable Cookies</h2>
            <p>You can control cookies directly through your browser settings:</p>
            <div className="browser-grid-custom">
              <div className="browser-card-custom">
                <div className="browser-name-custom">Chrome</div>
                <p>Settings → Privacy and Security → Cookies and other site data</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Safari</div>
                <p>Preferences → Privacy → Manage Website Data</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Firefox</div>
                <p>Settings → Privacy &amp; Security → Cookies and Site Data</p>
              </div>
              <div className="browser-card-custom">
                <div className="browser-name-custom">Edge</div>
                <p>Settings → Cookies and site permissions → Manage and delete cookies</p>
              </div>
            </div>
            <div className="highlight-box-custom">
              <p>Disabling all cookies may affect your experience. Specifically, your <strong>theme preference</strong> and <strong>language selection</strong> will reset on every visit if localStorage is cleared, as these are stored locally on your device.</p>
            </div>
            <h3>Opt Out of PostHog Analytics</h3>
            <p>To opt out of PostHog analytics specifically, visit <a href="https://posthog.com/privacy#opt-out" target="_blank" rel="noopener">posthog.com/privacy#opt-out</a> or decline analytics cookies via our banner. Declining on our banner will prevent PostHog from loading entirely.</p>
          </section>

          <section id="localstorage">
            <div className="section-number-custom">08 / localStorage</div>
            <h2>localStorage &amp; Session Storage</h2>
            <p>In addition to cookies, we use browser <strong>localStorage</strong> for certain preferences. Unlike cookies, localStorage data is not sent to our servers with every request — it stays on your device.</p>
            <ul>
              <li><strong>webdevguru_theme</strong> — Your selected visual theme</li>
              <li><strong>ph_*</strong> (PostHog) — Analytics session identifiers stored locally when analytics is accepted</li>
            </ul>
            <p>We do not use <strong>sessionStorage</strong> for any tracking purposes. Any sessionStorage usage is limited to temporary UI state (e.g. whether a modal was already shown in the current tab session) and is cleared automatically when you close your tab.</p>
            <p>You can clear localStorage via your browser's developer tools (Application → Local Storage → webdevguru.tech → Clear All) or through your browser's "Clear Site Data" option.</p>
          </section>

          <section id="updates">
            <div className="section-number-custom">09 / Updates</div>
            <h2>Policy Updates</h2>
            <p>We may update this Cookie Policy when we add new features, integrate new third-party tools, or to reflect changes in applicable law. When we do:</p>
            <ul>
              <li>The "Last Updated" date at the top of this page will be revised</li>
              <li>If the change is material (e.g. we add a new analytics provider), the cookie consent banner will re-appear to request fresh consent</li>
              <li>We recommend reviewing this page periodically</li>
            </ul>
          </section>

          <p>See also our <Link to="/privacy">Privacy Policy</Link> for how we handle personal data more broadly.</p>
        </main>
      </div>
    </div>
  );
};

export default CookiePolicy;
