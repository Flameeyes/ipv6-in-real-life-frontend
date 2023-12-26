// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">
          IPv6 in Real Life
        </h1>

        <div className="block">
          Hello! My name is <a href="https://flameeyes.com/">Flameeyes</a>
          and I have <a href="https://flameeyes.blog/tag/ipv6/">strong
            opinions about IPv6</a>.
        </div>

        <div className="block">
          In particular, I&apos;ve been arguing with many people over the years
          that, despite increasing adoption from the point of view of providers,
          there&apos;s very little interest from the point of view of end users,
          since outside of big tech, most of the websites people need to visit
          for their “daily life” do not support IPv6 at all.
        </div>

        <div className="block">
          Full disclosure here: both my <a href="https://www.facebook.com/ipv6/">
            current</a> and <a href="https://www.google.com/ipv6/">previous</a>
          employers are interested in IPv6 enough to have public trackers on
          adoption, and this project is totally unrelated to both, measuring
          a completely different metric and <b>it is my personal opinion, not
            reflecting my employer&apos;s</b>.
        </div>

        <h2 className="title is-2">Metric and Measurement</h2>
        <div className="block">
          Finding IPv6 trackers for ISP adoption is easy (see above), and it&apos;s
          also very easy to find trackers that look for “Alexa Top XX” domains.
          Both of these types of tracking are easy to execute in bulk, because
          they don&apos;t need manual curation at all. On the other hand, I would
          argue they provide a much less useful picture when it comes to “daily
          usage”.
        </div>

        <div className="block">
          What I&apos;m focusing on for this project, is to gather not just domains
          and sites, but whole services, and collect them by country. This has
          the unfortunate effect of requiring a lot more manual work, and a lot
          of country specific knowledge, which is why you&apos;ll find the selection
          fairly biased towards the countries I have first hand knowledge of.
        </div>

        <div className="block">

          The reason why I&apos;m gathering services together, is because it&apos;s not
          uncommon for many services to use different hostnames and hosting
          providers between their “showroom” website and the site that includes
          user management. This is to be expected as, for many years now, we
          have been using hostnames (or domain names in some other cases) as
          security boundaries. So for instance, many banks would have one domain
          to show off their current account offers, which would be including
          scripts for analytics and similar, while a completely different domain
          would be used for online banking, which wouldn&apos;t be loading any of that.
        </div>
      </div>
    </section >
  )
}
