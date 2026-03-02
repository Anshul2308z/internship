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
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-12">
      {/* Top Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-white font-semibold">{section.title}</h3>

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 border-t border-gray-700 pt-8">
        
        {/* App Buttons + Socials */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* App Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="border border-gray-600 rounded-lg px-4 py-2 hover:border-white transition"
            >
              Google Play
            </a>

            <a
              href="#"
              className="border border-gray-600 rounded-lg px-4 py-2 hover:border-white transition"
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
        <p className="text-sm text-gray-400 text-center md:text-right">
          © Copyright 2026 Internshala <br />
          (Scholiverse Educare Private Limited)
        </p>
      </div>
    </footer>
  );
}