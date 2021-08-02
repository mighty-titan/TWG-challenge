import Link from "next/link";
import Layout from "../components/Layout";
import SearchModal from "../components/SearchModal";

export default function Home() {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Link href="/">
          <button type="button" className="btn btn-primary">
            Start inquiry
          </button>
        </Link>
      </div>
      <SearchModal isOpen />
    </Layout>
  );
}
