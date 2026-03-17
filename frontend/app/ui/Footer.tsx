export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "We're hiring", href: "#" },
        { name: "Hire interns for your company", href: "#" },
        { name: "Post a Job", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Team Diary", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Our Services", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "Annual Returns", href: "#" },
      ],
    },
    {
      title: "More",
      links: [
        { name: "Sitemap", href: "#" },
        { name: "College TPO registration", href: "#" },
        { name: "List of Companies", href: "#" },
      ],
    },
  ];

  return (
    <footer className="mt-8 w-full bg-gray-900 py-10 text-gray-300 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-semibold text-white">{section.title}</h3>

              <ul className="space-y-2 text-sm sm:text-base">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="cursor-pointer transition-colors duration-200 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-gray-700 pt-8 sm:mt-12 md:flex-row md:items-center">
        
          {/* App Buttons + Socials */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:items-center">
            {/* App Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="rounded-lg border border-gray-600 px-4 py-2 transition hover:border-white"
              >
                Google Play
              </a>

              <a
                href="#"
                className="rounded-lg border border-gray-600 px-4 py-2 transition hover:border-white"
              >
                App Store
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-white">📷</a>
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">▶️</a>
              <a href="#" className="hover:text-white">💼</a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-left text-sm text-gray-400 md:text-right">
            © Copyright 2026 Internshala <br />
            (Scholiverse Educare Private Limited)
          </p>
        </div>
      </div>
    </footer>
  );
}