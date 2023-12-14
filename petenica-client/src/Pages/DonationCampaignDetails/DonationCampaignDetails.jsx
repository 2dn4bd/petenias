import { useLoaderData } from "react-router-dom";

const DonationCampaignDetails = () => {
    const donationDetails = useLoaderData()
    console.log(donationDetails);
    return (
        <div>
            this is donatino details page
        </div>
    );
};

export default DonationCampaignDetails;