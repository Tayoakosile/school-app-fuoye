import { Box } from "@chakra-ui/react";
import LatestUploads from "./LatestUploads";

const Dashboard = () => {
    return <Box as="section" overflowX={'hidden'} alignSelf='flex-start'>
        <LatestUploads />
    </Box>;
};

export default Dashboard;
