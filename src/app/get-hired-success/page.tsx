export const metadata = {
  title: "Application Submitted | Cleaning Boca Raton",
  description: "Your job application has been received.",
  alternates: { canonical: "https://cleaningbocaraton.com/get-hired-success" },
  openGraph: {
    title: "Application Submitted | Cleaning Boca Raton",
    description: "Your job application has been received.",
    type: "website",
    url: "https://cleaningbocaraton.com/get-hired-success",
  },
  twitter: {
    card: "summary",
    title: "Application Submitted | Cleaning Boca Raton",
    description: "Your job application has been received.",
  },
  robots: { index: false, follow: false },
};

export default function GetHiredSuccessPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Application Submitted</h1>
      <p>Thanks for applying! We’ll review your application and contact you soon.</p>
    </main>
  );
}