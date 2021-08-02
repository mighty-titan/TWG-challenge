import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Layout from "../components/Layout";
import SearchModal from "../components/SearchModal";


export default function Home() {
  const router = useRouter();
  
  return (
    <Layout>
      <div className="d-flex flex-1 justify-content-center align-items-center h-100">
        <Link as="/search" href="/">
          <button type="button" className="btn btn-primary">
            Start inquiry
          </button>
        </Link>
      </div>
      <SearchModal isOpen={!!router.asPath.includes('search')} />
    </Layout>
  );
}
