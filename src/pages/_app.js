import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/pages/about-us.css";
import "@/styles/components/header.css";
import "@/styles/pages/homepage.css"
import '@/styles/components/footer.css'
import '@/styles/pages/contact-us.css'
import '@/styles/pages/collectbot.css'
import '@/styles/pages/profilex.css'
import '@/styles/pages/privacy-policy.css'
import '@/styles/pages/career.css'
import '@/styles/pages/insight.css'
import '@/styles/pages/author.css'
import '@/styles/pages/blogs.css'
import 'react-toastify/dist/ReactToastify.css';
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
