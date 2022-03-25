import React from 'react';

const Answer2 = () => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Props</th>
                    <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Props are always read-only</td>
                    <td>State can be changed by nature</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Props can't be updated</td>
                    <td>State can be modified with the help of this.setState component</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td >Data and Function can be passed throw props</td>
                    <td>State can be accessed by the component where this state is declared</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Answer2;