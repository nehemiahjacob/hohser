import { Domain, HideStyle } from 'src/types';
import * as React from 'react';
import AddDomain from '../AddDomain/AddDomain';
import { FULL_HIDE } from 'src/constants';


export interface Props {
  domainsList: Array<Domain>;
  addDomain: (domainName: string, hideStyle: HideStyle) => void;
  removeDomain: () => void;
  fetchDomainsList: () => void;
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDomainsList();
  }

  public render() {
    return (
      <div>
        <AddDomain addDomain={this.props.addDomain} />
        {Object.keys(this.props.domainsList).map((item, i) => (
          <li key={i}>
            {this.props.domainsList[item].domainName}
            {
              this.props.domainsList[item].hideStyle === FULL_HIDE ?
                <span> ✅</span> : null
            }
          </li>
        ))}
      </div>
    )
  }
}

export default App;
