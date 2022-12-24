/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "MyVaultTokenERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyVaultTokenERC20__factory>;
    getContractFactory(
      name: "MyVaultTokenERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyVaultTokenERC4626__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4626__factory>;

    getContractAt(
      name: "MyVaultTokenERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyVaultTokenERC20>;
    getContractAt(
      name: "MyVaultTokenERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyVaultTokenERC4626>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4626>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4626>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
