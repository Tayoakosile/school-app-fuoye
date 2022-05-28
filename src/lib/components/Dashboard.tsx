import { Box, VStack } from '@chakra-ui/react';
import LatestUploads from "./LatestUploads";
import LatestAnnouncement from './LatestAnnoucement';


const Dashboard = () => {
    return <Box as="section" overflowX={'hidden'} alignSelf='flex-start' mt={{base:'0',lg:'96'}} w='full'>
        <LatestAnnouncement />

        <LatestUploads />
    </Box>;
};

export default Dashboard;
