import Layout from "../components/Layout.tsx";
import PrincipalHome from "../components/Home.tsx";
export default function Home() {
  const title = "Reflexoperu";
  return (
    <Layout title={title}>
      <PrincipalHome />
    </Layout>
  );
}
