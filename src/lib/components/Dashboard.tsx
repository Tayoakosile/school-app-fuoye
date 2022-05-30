import { Box, VStack } from '@chakra-ui/react';
import LatestUploads from "./LatestUploads";
import LatestAnnouncement from './LatestAnnoucement';


const Dashboard = () => {
    return <Box as="section" overflowX={'hidden'} alignSelf='flex-start' mt={{ base: '0', lg: '3rem' }} w='full'
        sx={{
            '.alice-carousel__stage-item': {
                px: '10px !important'
            }
        }}
    >
        <LatestAnnouncement />
        <LatestUploads />
    </Box>;
};

export default Dashboard;
