import * as React from 'react';
import './Hello.css'
import logo from './logo.svg';

export interface InterfaceProps {
    name: string,
    enthusiasmLevel?: number
}

interface InterfaceState {
    currentEnthusiasm: number
}

class Hello extends React.Component<InterfaceProps, InterfaceState> {

    constructor(props: InterfaceProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    public onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    public render() {
      const { name } = this.props;

      if (this.state.currentEnthusiasm <= 0) {
          throw new Error('You could be a little more enthusiastic. :D');
      }

      return (
          <div className="hello">
              <img style={{width: 150}} src={logo} className="App-logo" alt="logo" />
              <div className="greeting">
                  Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
              </div>
              <button onClick={this.onDecrement}>-</button>
              <button onClick={this.onIncrement}>+</button>
          </div>
      );
  }

    public updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }
}

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello;
