import React from 'react';
import { useNavigate } from 'react-router-dom';
import templates from '../Template/templates';
import './TemplatePage.css'; // Create a CSS file for styling

const TemplatePage = () => {
    const navigate = useNavigate();

    const handleTemplateSelect = (id) => {
        localStorage.setItem('selectedTemplateId', id);
        console.log(id);
        navigate('/resumeBuild');
    };

    return (
        <div className="template-page">
            <h2>Choose from our resume templates</h2>
            {Object.entries(templates).map(([section, templatesList]) => (
                <div key={section} className="template-section">
                    <h3>{section.charAt(0).toUpperCase() + section.slice(1)} Templates</h3>
                    <div className='line'></div>
                    <div className="template-list">
                        {templatesList.map(template => (
                            <div
                                key={template.id}
                                className="template-card"
                                onClick={() => handleTemplateSelect(template.id)}
                            >
                                <img src={template.thumbnail} alt={template.title} className="template-thumbnail" />
                               
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TemplatePage;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import templates from '../Template/templates';
// import './TemplatePage.css'; // Ensure this includes slick-carousel styles

// const TemplatePage = () => {
//     const navigate = useNavigate();

//     const handleTemplateSelect = (id) => {
//         localStorage.setItem('selectedTemplateId', id);
//         console.log(id);
//         navigate('/resumeBuild');
//     };

//     // Slider settings
//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="template-page">
//             <h2>Choose from our resume templates</h2>
//             {Object.entries(templates).map(([section, templatesList]) => (
//                 <div key={section} className="template-section">
//                     <h3>{section.charAt(0).toUpperCase() + section.slice(1)} Templates</h3>
//                     <div className='line'></div>
//                     <Slider {...sliderSettings} className="template-slider">
//                         {templatesList.map(template => (
//                             <div
//                                 key={template.id}
//                                 className="template-card"
//                                 onClick={() => handleTemplateSelect(template.id)}
//                             >
//                                 <img src={template.thumbnail} alt={template.title} className="template-thumbnail" />
//                                 {/* <h3 className="template-title">{template.title}</h3> */}
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default TemplatePage;
