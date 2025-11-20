// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import ProjectCard from '../components/ProjectCard';
// import './OngoingProjects.css';
// import buildingimage from '../asset/building image.webp'
// import buildingimage1 from '../asset/building image 001.webp'
// import buildingimage2 from '../asset/building image 002.webp'

// const OngoingProjects = () => {
//   const [searchParams] = useSearchParams();
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const [selectedType, setSelectedType] = useState('all');

//   useEffect(() => {
//     const location = searchParams.get('location');
//     if (location) {
//       setSelectedLocation(location);
//     }
//   }, [searchParams]);


//   const projects = [
//     {
//       id: 1,
//       name: "Surya Garden -1",
//       location: "ParashakthiNagar",
//       bhk: "2 BHK, 3 BHK & 4 BHK",
//        image: buildingimage,
//       // id: 1,
//       // name: 'Happy Elite Villas',
//       // location: 'Surya Nagar, Madurai',
//       description: 'Premium apartments with modern amenities in the heart of Surya Nagar.',
//       // bhk: '2, 3',
//       type: 'Apartments',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'Parashakthi Nagar',
//       // image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
//     },
//     {
//        id: 2,
//       name: "Surya Garden -2",
//       location: "Thiruparankundram",
//       bhk: "2 BHK, 3 BHK",
//       image: buildingimage1,
//       // id: 2,
//       // name: 'Happy Twin Towers',
//       // location: 'Surya Nagar, Madurai',
//       description: 'Luxury twin tower apartments with world-class facilities.',
//       // bhk: '2, 3, 4',
//       type: 'Apartments',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'Thiruparankundram',
//       // image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
//     },
//     {
//       id: 3,
//       name: "Surya Garden -3",
//       location: "Kamarajar Nagar",
//       bhk: "1 BHK, 2 BHK, 3 Plot - 3A, 3B",
//       image: buildingimage2,
//       // id: 3,
//       // name: 'Happy Gardens',
//       // location: 'Oomachikulam, Madurai',
//       description: 'Premium gated community with luxury villas and apartments.',
//       // bhk: '3, 4',
//       type: 'Villas',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'Kamarajar Nagar',
//       // image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
//     },
//     {
//       id: 4,
//       name: "Surya Garden -4",
//       location: "Thillai Nagar",
//       bhk: "1 BHK",
//       image: buildingimage1,
//       // id: 4,
//       // name: 'Happy Elite City',
//       // location: 'Oomachikulam, Madurai',
//       description: 'Ultra-Luxury 1BHK Apartments with modern amenities.',
//       // bhk: '1, 2, 3',
//       type: 'Apartments',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'Thillai Nagar',
//       // image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
//     },
//     {
      
//       id: 5,
//       name: "Surya Garden -5",
//       location: "Karisalkulam",
//       bhk: "Plot",
//       image: buildingimage,
//       // id: 5,
//       // name: 'Happy Green Valley',
//       // location: 'Avaniyapuram, Madurai',
//       description: 'Premium villas in a gated community with lush green surroundings.',
//       // bhk: '3, 4, 5',
//       type: 'Villas',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'Karisalkulam',
//       // image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
//     },
//     {
//       id: 6,
//       name: "D-mart",
//       location: "D-Mart",
//       bhk: " 3 BHK",
//       image: buildingimage2,
//       // id: 6,
//       // name: 'Happy Flora',
//       // location: 'Thuvariman, Madurai',
//       description: 'Beautiful villas surrounded by nature with modern amenities.',
//       // bhk: '3, 4',
//       type: 'Villas',
//       status: 'Ongoing',
//       city: 'madurai',
//       area: 'D-Mart',
//       // image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
//     },
//     // {
//     //   id: 7,
//     //   name: 'Happy River View',
//     //   location: 'Thuvariman, Madurai',
//     //   description: 'Luxury riverfront villas with stunning views and premium finishes.',
//     //   bhk: '4, 5',
//     //   type: 'Villas',
//     //   status: 'Ongoing',
//     //   city: 'madurai',
//     //   area: 'thuvariman',
//     //   image: 'https://images.unsplash.com/photo-1600585154526-990dbe4eb5f3?w=800&h=600&fit=crop'
//     // },
//     // {
//     //   id: 8,
//     //   name: 'Happy Signature Residency',
//     //   location: 'Saravanampatti, Coimbatore',
//     //   description: 'Luxury gated community villas in the fast-growing IT hub.',
//     //   bhk: '3, 4',
//     //   type: 'Villas',
//     //   status: 'Ongoing',
//     //   city: 'coimbatore',
//     //   area: 'saravanampatti',
//     //   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
//     // }
//   ];

//   // const filteredProjects = projects.filter(project => {
//   //   const locationMatch = selectedLocation === 'all' || 
//   //     project.city === selectedLocation || 
//   //     project.area === selectedLocation;
//   //   const typeMatch = selectedType === 'all' || project.type.toLowerCase() === selectedType;
//   //   return locationMatch && typeMatch;
//   // });

//   const filteredProjects = projects.filter(project => {
//   const locationMatch =
//     selectedLocation === "all" ||
//     project.city.toLowerCase() === selectedLocation.toLowerCase() ||
//     project.area.toLowerCase() === selectedLocation.toLowerCase();

//   const typeMatch =
//     selectedType === "all" ||
//     project.type.toLowerCase() === selectedType.toLowerCase();

//   return locationMatch && typeMatch;
// });


//  const locations = [
//   { value: 'all', label: 'All Locations' },
//   { value: 'madurai', label: 'Madurai' },
//   { value: 'parashakthi nagar', label: 'Parashakthi Nagar' },
//   { value: 'thiruparankundram', label: 'Thiruparankundram' },
//   { value: 'kamarajar nagar', label: 'Kamarajar Nagar' },
//   { value: 'thillai nagar', label: 'Thillai Nagar' },
//   { value: 'karisalkulam', label: 'Karisalkulam' },
//   { value: 'd-mart', label: 'D-Mart' },
// ];


//   const types = [
//     { value: 'all', label: 'All Types' },
//     { value: 'villas', label: 'Villas' },
//     { value: 'apartments', label: 'Apartments' }
//   ];

//   return (
//     <div className="ongoing-projects-page">
//       <div className="page-header">
//         <div className="container">
//           <h1>Ongoing Projects</h1>
//           <p>Explore Our Current Developments</p>
//         </div>
//       </div>

//       <div className="container">
//         <section className="projects-content">
//           <div className="filters">
//             <div className="filter-group">
//               <label htmlFor="location">Filter by Location:</label>
//               <select 
//                 id="location" 
//                 value={selectedLocation} 
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//               >
//                 {locations.map(loc => (
//                   <option key={loc.value} value={loc.value}>{loc.label}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="filter-group">
//               <label htmlFor="type">Filter by Type:</label>
//               <select 
//                 id="type" 
//                 value={selectedType} 
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 {types.map(type => (
//                   <option key={type.value} value={type.value}>{type.label}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="projects-grid">
//             {filteredProjects.length > 0 ? (
//               filteredProjects.map(project => (
//                 <ProjectCard key={project.id} project={project} />
//               ))
//             ) : (
//               <div className="no-results">
//                 <p>No projects found matching your criteria.</p>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default OngoingProjects;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import './OngoingProjects.css';

import buildingimage from '../asset/building image.webp';
import buildingimage1 from '../asset/building image 001.webp';
import buildingimage2 from '../asset/building image 002.webp';
import headerBg from '../asset/Ongoingimagebg.jpg'

const OngoingProjects = () => {
  const [searchParams] = useSearchParams();

  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Force ALL on first load (GUARANTEED)
  useEffect(() => {
    setSelectedLocation("all");
    setSelectedType("all");
  }, []);

  // Projects Data
  const projects = [
    {
      id: 1,
      name: "Surya Garden -1",
      location: "Parashakthi Nagar",
      bhk: "2 BHK, 3 BHK & 4 BHK",
      image: buildingimage,
      description: "Premium apartments with modern amenities in the heart of Surya Nagar.",
      type: "Apartments",
      status: "Ongoing",
      city: "madurai",
      area: "Parashakthi Nagar",
    },
    {
      id: 2,
      name: "Surya Garden -2",
      location: "Thiruparankundram",
      bhk: "2 BHK, 3 BHK",
      image: buildingimage1,
      description: "Luxury twin tower apartments with world-class facilities.",
      type: "Apartments",
      status: "Ongoing",
      city: "madurai",
      area: "Thiruparankundram",
    },
    {
      id: 3,
      name: "Surya Garden -3",
      location: "Kamarajar Nagar",
      bhk: "1 BHK, 2 BHK, 3 Plot - 3A, 3B",
      image: buildingimage2,
      description: "Premium gated community with luxury villas and apartments.",
      type: "Villas",
      status: "Ongoing",
      city: "madurai",
      area: "Kamarajar Nagar",
    },
    {
      id: 4,
      name: "Surya Garden -4",
      location: "Thillai Nagar",
      bhk: "1 BHK",
      image: buildingimage1,
      description: "Ultra-Luxury 1BHK Apartments with modern amenities.",
      type: "Apartments",
      status: "Ongoing",
      city: "madurai",
      area: "Thillai Nagar",
    },
    {
      id: 5,
      name: "Surya Garden -5",
      location: "Karisalkulam",
      bhk: "Plot",
      image: buildingimage,
      description: "Premium villas in a gated community with lush green surroundings.",
      type: "Villas",
      status: "Ongoing",
      city: "madurai",
      area: "Karisalkulam",
    },
    {
      id: 6,
      name: "D-mart",
      location: "D-Mart",
      bhk: "3 BHK",
      image: buildingimage2,
      description: "Beautiful villas surrounded by nature with modern amenities.",
      type: "Villas",
      status: "Ongoing",
      city: "madurai",
      area: "D-Mart",
    },
  ];

  console.log("selectedLocation:", selectedLocation); // DEBUG
  console.log("selectedType:", selectedType);

  // FINAL FILTER LOGIC
  const filteredProjects = projects.filter((project) => {
    const loc = selectedLocation.toLowerCase();
    const type = selectedType.toLowerCase();

    const locationMatch =
      loc === "all" ||
      project.city.toLowerCase() === loc ||
      project.area.toLowerCase() === loc ||
      project.location.toLowerCase() === loc;

    const typeMatch =
      type === "all" || project.type.toLowerCase() === type;

    return locationMatch && typeMatch;
  });

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "madurai", label: "Madurai" },
    { value: "parashakthi nagar", label: "Parashakthi Nagar" },
    { value: "thiruparankundram", label: "Thiruparankundram" },
    { value: "kamarajar nagar", label: "Kamarajar Nagar" },
    { value: "thillai nagar", label: "Thillai Nagar" },
    { value: "karisalkulam", label: "Karisalkulam" },
    { value: "d-mart", label: "D-Mart" },
  ];

  const types = [
    { value: "all", label: "All Types" },
    { value: "villas", label: "Villas" },
    { value: "apartments", label: "Apartments" },
  ];

  return (
    <div className="ongoing-projects-page">
       <div className="services-header" style={{ backgroundImage: `url(${headerBg})` }}>
            <div className="services-header-overlay"></div>
           <div className="services-header-left">
          <h1>Ongoing Projects</h1>
          <p>Explore Our Current Developments</p>
        </div>
      </div>

      <div className="container">
        <section className="projects-content">
          <div className="filters">
            <div className="filter-group">
              <label>Filter by Location:</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p>No projects found matching your criteria.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OngoingProjects;



