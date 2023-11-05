import { Box, VStack } from '@chakra-ui/react';
import LatestUploads from "../Dashboard/LatestUploads";
import LatestAnnouncement from '../Dashboard/LatestAnnoucement';
import MockExams from './MockExams';


const Dashboard = () => {
    return <Box as="section" overflowX={'hidden'} alignSelf='flex-start' mt={{ base: '0', lg: '3rem' }} w='full'
        sx={{
            '.alice-carousel__stage-item': {
                px: '10px !important'
            }
        }}
        px="4"
    >
        <LatestAnnouncement />
        <LatestUploads />
        <MockExams />
    </Box>;
};

export default Dashboard;
