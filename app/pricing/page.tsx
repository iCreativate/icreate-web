import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { loadApps } from "@/lib/apps";
import { pageMeta } from "@/lib/metadata";
import {
  PRO_MONTHLY_ZAR,
  PRO_YEARLY_ZAR,
  SITE_URL,
  zar,
} from "@/lib/site";

export const metadata = pageMeta({
  title: "Pricing",
  description: `iCreate is free. Optional iCreate Pro is ${zar(PRO_MONTHLY_ZAR)} a month or ${zar(PRO_YEARLY_ZAR)} a year, billed in rand through PayFast. Apps stay free either way.`,
  path: "/pricing",
});

export default function PricingPage() {
  const appCount = loadApps().length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "iCreate Pro",
          description:
            "Optional extras on top of the free iCreate suite: settings backup, priority support, early access.",
          brand: { "@type": "Brand", name: "iCreate" },
          offers: [
            {
              "@type": "Offer",
              price: String(PRO_MONTHLY_ZAR),
              priceCurrency: "ZAR",
              name: "Monthly",
              url: `${SITE_URL}/pricing`,
            },
            {
              "@type": "Offer",
              price: String(PRO_YEARLY_ZAR),
              priceCurrency: "ZAR",
              name: "Yearly",
              url: `${SITE_URL}/pricing`,
            },
          ],
        }}
      />
      <PageIntro kicker="Rand" title="Free for the apps. Pro for extras.">
        <p>
          There is no Adobe-style wall. All {appCount} shipping apps install
          without an account. iCreate Pro is optional, billed in South African
          rand through PayFast, from inside the launcher.
        </p>
      </PageIntro>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-line bg-sunken/40 p-6">
          <p className="font-mono text-xs tracking-widest text-faint uppercase">
            Free
          </p>
          <p className="mt-2 font-display text-4xl font-semibold">R0</p>
          <p className="mt-1 text-sm text-muted">Forever, for the suite.</p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>All {appCount} catalogue apps, including community titles</li>
            <li>Offline use after install — no account, no Adobe ID</li>
            <li>Updates through the launcher, when you choose</li>
            <li>macOS, Windows and Linux</li>
          </ul>
          <Link href="/download" className="btn-ghost mt-8">
            Download free
          </Link>
        </article>
        <article className="rounded-2xl border border-accent/50 bg-sunken p-6">
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">
            iCreate Pro
          </p>
          <p className="mt-2 font-display text-4xl font-semibold">
            {zar(PRO_MONTHLY_ZAR)}
            <span className="text-lg font-normal text-muted"> / month</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            or {zar(PRO_YEARLY_ZAR)} a year. South African rand, PayFast.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>Cloud backup of launcher settings</li>
            <li>Priority support</li>
            <li>Early access to new apps when we mark them that way</li>
            <li>Does not unlock the catalogue — those apps stay on Free</li>
          </ul>
          <Link href="/learn/accounts-and-pro" className="btn-primary mt-8">
            How checkout works
          </Link>
        </article>
      </div>

      <p className="mt-8 max-w-2xl text-sm text-faint">
        Subscribe from the launcher after you sign in with an email code or
        Google. This website does not take card numbers. Cancel anytime; the
        apps keep working on Free.
      </p>
    </div>
  );
}
