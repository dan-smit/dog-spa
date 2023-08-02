import React from 'react';

const Hours = () => {
  return (
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-6">
                <h1 className="my-4 text-center">Hours</h1>
                <table className="table table-bordered text-center">
	            	  <thead>
	            		<tr>
	            		  <th>Day</th>
	            		  <th>Opening Time</th>
	            		  <th>Closing Time</th>
	            		</tr>
	            	  </thead>
	            	  <tbody>
	            		<tr>
	            		  <td>Monday</td>
	            		  <td>9:00am</td>
	            		  <td>6:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Tuesday</td>
	            		  <td>9:00am</td>
	            		  <td>6:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Wednesday</td>
	            		  <td>9:00am</td>
	            		  <td>6:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Thursday</td>
	            		  <td>9:00am</td>
	            		  <td>6:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Friday</td>
	            		  <td>9:00am</td>
	            		  <td>6:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Saturday</td>
	            		  <td>10:00am</td>
	            		  <td>4:00pm</td>
	            		</tr>
	            		<tr>
	            		  <td>Sunday</td>
	            		  <td>10:00am</td>
	            		  <td>4:00pm</td>
	            		</tr>
	            	  </tbody>
	            	</table>
                <p className="my-4">Location: 123 Main St, City, State</p>
            </div>
        </div>
    </div>
  );
};

export default Hours;