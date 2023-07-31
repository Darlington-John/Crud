import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import ToggableButton, { GoogleButton, LargeButton } from '../Buttons/Buttons';
import AdaImg from './../../Assets/Images/ada.png';
import bnbImg from './../../Assets/Images/bnb.png';
import ethImg from './../../Assets/Images/eth.png';
import trxImg from './../../Assets/Images/trx.png';
import ShieldImg from './../../Assets/Images/Shield.png';
import visibleIcon from './../../Assets/Icons/Visible.png';
import googleIcon from './../../Assets/Images/google.png';
import CurveIcon from './../../Assets/Images/Curve.png';
import LinkIcon from './../../Assets/Icons/Link.png';
import AddIcon from './../../Assets/Icons/Add.png';
import LineIcon from './../../Assets/Images/Line.png';
import ArrowleftIcon from './../../Assets/Icons/Arrowleft.png';
import CrossIcon from './../../Assets/Icons/Cross.png';
import InfoIcon from './../../Assets/Icons/Info.png';
import { Input, VisibleInput } from '../Inputs/Inputs';
import LockIcon from './../../Assets/Icons/Lock.png';
import PenIcon from './../../Assets/Icons/Pen.png';
import ChevronrightIcon from './../../Assets/Icons/Chevronright.png';
import CodeIcon from './../../Assets/Icons/Code.png';

import CardIcon from './../../Assets/Icons/Card.png';
export const WalletCards = (props) => {
  return (
    <div className="card">
      <div className="ImgButtons">
        <img className="CardImg" src={props.image} />
      </div>
      <h3>{props.cardText}</h3>
    </div>
  );
};

WalletCards.propTypes = {
  cardText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export const AssetCard = (props) => {
  return (
    <div className="AssetCard">
      <ToggableButton />
      <div className="NetBal">
        <h1>$12.01</h1>
        <h4>Net balance</h4>
      </div>
      <div>
        <AssetLists
          BrandIcon={trxImg}
          BrandName="Tron"
          BrandAbbrev="TRX"
          Number="0.004"
          ApproxPrice="~$7.48"
        />
        <AssetLists
          BrandIcon={ethImg}
          BrandName="Ethereum"
          BrandAbbrev="ETH"
          Number="5.92"
          ApproxPrice="~$1.8"
        />
        <AssetLists
          BrandIcon={bnbImg}
          BrandName="BNB Smartchain"
          BrandAbbrev="BNB"
          Number="0.01"
          ApproxPrice="~$9.48"
        />
        <AssetLists
          BrandIcon={AdaImg}
          BrandName="Cardano"
          BrandAbbrev="ADA"
          Number="0.7"
          ApproxPrice="~$4.91"
        />
      </div>
    </div>
  );
};

export const AcctCard = (props) => {
  return (
    <div className="AssetCard">
      <div className="CreateAcct">
        <h1>Create account</h1>
        <h4>To access your friendly web3 wallet</h4>
      </div>
      <div className="Account">
        <VisibleInput placeholder="Your email address" inputIcon={null} />
        <Input placeholder="password" inputIcon={visibleIcon} type="text" />
        <LargeButton text="Continue" />
        <p>or</p>
        <GoogleButton text="Sign up with Google" Icon={googleIcon} />
        <p>
          Already have an account <span className="Login">Log in</span>
        </p>
      </div>
    </div>
  );
};

export const AssetLists = (props) => {
  return (
    <div className="AssetLists">
      <div className="IconDiv">
        <img src={props.BrandIcon} />
        <div className="BrandsDiv">
          <p>{props.BrandName}</p>
          <p>{props.BrandAbbrev}</p>
        </div>
      </div>
      <div className="PriceDiv">
        <p>{props.Number}</p>
        <p>{props.ApproxPrice}</p>
      </div>
    </div>
  );
};

export const RecoverCard = (props) => {
  return (
    <div className="AssetCard">
      <Navigation
        leftIcon={ArrowleftIcon}
        title="Gaurdians"
        rightIcon={InfoIcon}
      />
      <div className="Gaurdians">
        <img src={ShieldImg} />
        <span className="AddGuardians">You haven't added a guardian yet</span>
        <LargeButton text="Add a Guardian" />
      </div>
    </div>
  );
};

export const Navigation = (props) => {
  return (
    <div className="Navigation">
      <img src={props.leftIcon} />
      <h1>{props.title}</h1>
      <img src={props.rightIcon} />
    </div>
  );
};
Navigation.propTypes = {
  leftIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.string.isRequired,
};

export const TransactionCard = () => {
  return (
    <div className="AssetCard">
      <Navigation
        leftIcon={CrossIcon}
        title="Conditions"
        rightIcon={InfoIcon}
      />
      <div className="Conditions">
        <div className="Curve">
          <img src={CurveIcon} />
          <span>Curve.fi</span>
        </div>
        <div className="Curve">
          <img src={LinkIcon} />
          <span className="visit">Visit site</span>
        </div>
        <img src={LineIcon} />
        <p>What are the conditions to buy 0.004 ETH</p>
        <AddCondition Icon={AddIcon} Text="Add price condition" />
        <AddCondition Icon={AddIcon} Text="Add time condition" />
        <div className="Info">
          <img src={InfoIcon} />
          <span className="Edit">
            You will be able to edit all these before you confirm the condition
          </span>
        </div>
      </div>
    </div>
  );
};

export const AddCondition = (props) => {
  return (
    <div className="AddCondition">
      <img src={props.Icon} />
      <span>{props.Text}</span>
    </div>
  );
};
AddCondition.propTypes = {
  Icon: PropTypes.string.isRequired,

  Text: PropTypes.string.isRequired,
};

export const FeaturesCard = (props) => {
  return (
    <div className="FeaturesCard">
      <div className="FeaturesContainer">
        <Features
          LeftIcon={LockIcon}
          Text="2-factor authentication"
          RightIcon={ChevronrightIcon}
        />
        <Features
          LeftIcon={CardIcon}
          Text="Payment"
          RightIcon={ChevronrightIcon}
        />
        <Features
          LeftIcon={PenIcon}
          Text="Signature requests"
          RightIcon={ChevronrightIcon}
        />
        <Features
          LeftIcon={CodeIcon}
          Text="Conditional transactions"
          RightIcon={ChevronrightIcon}
        />
        <Features
          LeftIcon={LockIcon}
          Text="2-factor authentication"
          RightIcon={ChevronrightIcon}
        />
      </div>
    </div>
  );
};

export const Features = (props) => {
  return (
    <div className="Features">
      <img src={props.LeftIcon} />

      <span>{props.Text}</span>
      <img src={props.RightIcon} />
    </div>
  );
};

Features.propTypes = {
  RightIcon: PropTypes.string.isRequired,
  LeftIcon: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
};
