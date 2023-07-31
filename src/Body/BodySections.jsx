import React from 'react';
import PropTypes from 'prop-types';
import {
  AssetCard,
  AcctCard,
  WalletCards,
  RecoverCard,
  TransactionCard,
  FeaturesCard,
} from './../Components/Cards/Cards';
import './BodySections.css';
import {
  Button,
  DefaultBtn,
  DefaultButton,
} from './../Components/Buttons/Buttons';
import VidIcon from './../Assets/Icons/Video.png';
import HandShakeImg from './../Assets/Images/Handshake.png';
import CircleImg from './../Assets/Images/Circle.png';
import MobileImg from './../Assets/Images/Mobile.png';
import BitcoinImg from './../Assets/Images/Bitcoin.png';
import VectorImg from './../Assets/Images/Vector.png';

const Body = () => {
  return (
    <div>
      <Wallet />
      <ManageAssets />
      <GetStarted />
      <RecoverAcount />
      <SetTransactions />
      <MoreFeatures />
    </div>
  );
};

const Wallet = () => {
  const WalletContainerStyle = {
    background: `radial-gradient(244.27% 244.27%  at 50.00% -95.77%, rgba(169, 169, 169, 0.70) 0%, rgba(169, 169, 169, 0.00) 56.15%), #000 url("${VectorImg}")`,
  };

  return (
    <div className="WalletContainer" style={WalletContainerStyle}>
      <div className="Wallet">
        <h1 className="WalletHeader">A wallet you will enjoy using!</h1>
        <p className="WalletParagraph">
          Crud is your normal wallet without the seed phrases and other
          technical stuffs you don’t like. We also added a few things we are
          sure you will enjoy using.
        </p>
        <Button text="See how it works" icon={VidIcon} />
      </div>
      <div className="CardsContainer">
        <WalletCards
          cardText="Forget all about storing seed phrases"
          image={HandShakeImg}
        />
        <WalletCards
          cardText="Forget all about storing seed phrases"
          image={MobileImg}
        />
        <WalletCards
          cardText="Forget all about storing seed phrases"
          image={CircleImg}
        />
        <WalletCards
          cardText="Forget all about storing seed phrases"
          image={BitcoinImg}
        />
      </div>
    </div>
  );
};
WalletCards.propTypes = {
  cardText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const ManageAssets = () => {
  const ManageAssetsStyle = {
    background: `radial-gradient(244.27% 244.27%  at 50.00% -95.77%, rgba(169, 169, 169, 0.10000000149011612) 0%, rgba(169, 169, 169, 0.00) 56.15%), #000 url("${VectorImg}")`,
  };
  return (
    <div style={ManageAssetsStyle}>
      <div className="ManageAssets">
        <div className="AssetsInAplace">
          <h1>All your assets in one place</h1>
          <p>
            Have all your assets in a single place. With our wallet, you can
            easily buy, sell, and swap tokens. Your NFTs are not left out
          </p>
        </div>
        <div className="AssetCardContainer">
          <AssetCard />
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const GetStartedStyle = {
    background: `radial-gradient(108.51% 108.51% at 50.00% 52.16%, rgba(42, 42, 42, 0.70) 0%, rgba(0, 0, 0, 0.00) 65.80%), #000 url("${VectorImg}")`,
  };
  return (
    <div style={GetStartedStyle}>
      <div className="ManageAssets">
        <div className="AssetsInAplace">
          <h1>Get started quickly & easily</h1>
          <p>
            Forget seed phrases! Sign in with your email address or social
            account, the way you are used to.
          </p>
        </div>
        <div className="AssetCardContainer">
          <AcctCard />
        </div>
      </div>
    </div>
  );
};

const RecoverAcount = () => {
  const RecoverAcountStyle = {
    background: `radial-gradient(131.18% 112.43% at 69.83% 50.00%, rgba(42, 42, 42, 0.70) 0%, rgba(0, 0, 0, 0.00) 51.69%), #000 url("${VectorImg}")`,
  };
  return (
    <div style={RecoverAcountStyle}>
      <div className="ManageAssets">
        <div className="AssetsInAplace">
          <h1>Recover your account easily</h1>
          <p>
            Lose access to your account, no problem! You can set up a guardian
            that can help get your account back
          </p>
        </div>
        <div className="AssetCardContainer">
          <RecoverCard />
        </div>
      </div>
    </div>
  );
};
export const SetTransactions = () => {
  const SetTransactionsStyle = {
    background: `radial-gradient(118.18% 107.27% at 31.53% 48.17%, rgba(42, 42, 42, 0.70) 0%, rgba(0, 0, 0, 0.00) 52.06%), #000 url("${VectorImg}")`,
  };
  return (
    <div style={SetTransactionsStyle}>
      <div className="ManageAssets">
        <div className="AssetsInAplace">
          <h1>Set transactions on your terms</h1>
          <p>
            Need the stars to align for your transaction to run. Your can do
            that. Set your transactions up once and watch it run once your
            conditions are met.
          </p>
          <DefaultButton text="What does this mean?" />
        </div>
        <div className="AssetCardContainer">
          <TransactionCard />
        </div>
      </div>
    </div>
  );
};

export const MoreFeatures = () => {
  const MoreFeaturesStyle = {
    background: ` radial-gradient(84.69% 84.69% at 46.08% 46.14%, rgba(42, 42, 42, 0.70) 0%, rgba(0, 0, 0, 0.00) 52.06%), #000 url("${VectorImg}")`,
  };
  return (
    <div style={MoreFeaturesStyle}>
      <div className="FeaturesManageAssets">
        <div className="AssetsInAplace">
          <h1>More features for you…</h1>
          <DefaultBtn text="See them all" />
        </div>
        <div className="AssetCardContainer">
          <FeaturesCard />
        </div>
      </div>
    </div>
  );
};

export default Body;
