pragma solidity >=0.4.24;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract SampleToken is ERC20{


constructor()ERC20("WIKA","WK")public{
    _totalSupply=1000;
    _balances[msg.sender]=_totalSupply;
}

}