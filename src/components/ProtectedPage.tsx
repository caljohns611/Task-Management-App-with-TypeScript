import PageLayout from "./PagLayout";

const ProtectedPage: React.FC = () => {
    return (
        <PageLayout>
            <h2>Protected Page</h2>
            <p>Keep it a Secret</p>
        </PageLayout>
    );
};

export default ProtectedPage;