import React, { FC } from "react";
import { SvgXml } from "react-native-svg"; 
import HomeActiveIcon from '../../../assets/icons/home-active.svg';
import HomeInActiveIcon from '../../../assets/icons/home-inactive.svg';
import BudgetActiveIcon from '../../../assets/icons/budget-active.svg';
import BudgetInActiveIcon from '../../../assets/icons/budget-inactive.svg';
import WalletActiveIcon from '../../../assets/icons/wallet-active.svg';
import WalletInActiveIcon from '../../../assets/icons/wallet-inactive.svg';
import ChatActiveIcon from '../../../assets/icons/chat-active.svg';
import ChatInActiveIcon from '../../../assets/icons/chat-inactive.svg';
import MoreActiveIcon from '../../../assets/icons/more-active.svg';
import MoreInActiveIcon from '../../../assets/icons/more-inactive.svg';

interface Props {
    width?: number,
    height?: number
}

export const HomeActive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <HomeActiveIcon width={width} height={height} />
    return <SvgImg />
}

export const HomeInactive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <HomeInActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const BudgetActive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <BudgetActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const BudgetInactive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <BudgetInActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const WalletActive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <WalletActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const WalletInactive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <WalletInActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const ChatActive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <ChatActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const ChatInactive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <ChatInActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const MoreActive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <MoreActiveIcon height={height} width={width}  />
    return <SvgImg />
}

export const MoreInactive: FC<Props> = ({height, width})=> {
    const SvgImg = () => <MoreInActiveIcon height={height} width={width}  />
    return <SvgImg />
}
