import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import templates from '../Template/templates';
import './TemplatePage.css'; 
import { Typewriter } from 'react-simple-typewriter';

const ChangeTemplate = () => {
    const navigate = useNavigate();

    // State for filters
    const [categoryFilter, setCategoryFilter] = useState('');

    const handleTemplateSelect = (id) => {
        localStorage.setItem('selectedTemplateId', id);
        navigate('/display');
    };

    // Filter templates based on category and color
    const filteredTemplates = Object.entries(templates).reduce((acc, [section, templatesList]) => {
        const filteredList = templatesList.filter(template => {
            const matchesCategory = categoryFilter ? section === categoryFilter : true;
          
            return matchesCategory;
        });
        if (filteredList.length > 0) {
            acc[section] = filteredList;
        }
        return acc;
    }, {});

    return (
        <div className="template-page">
            <h2><Typewriter
          words={['Choose a Template That Reflects Your Style']}
          loop={1} // Number of times to loop; 0 for infinite
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
        /></h2>
            
            {/* Search Filters */}
            <div className="filters">
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="filter-dropdown"
                >
                    <option value="">All Categories</option>
                    {Object.keys(templates).map((category) => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
                
            </div>

            {Object.entries(filteredTemplates).map(([section, templatesList]) => (
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

export default ChangeTemplate;
