import Link from "next/link";
import Layout from "../components/Layout";
import SearchModal from "../components/SearchModal";

export default function Home() {
  return (
    <Layout>
      <div className="d-flex flex-1 justify-content-center align-content-center">
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
