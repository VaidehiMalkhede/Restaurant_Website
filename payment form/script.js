document.addEventListener('DOMContentLoaded', function() {
    const stateCityMap = {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
        "Arunachal Pradesh": ["Itanagar", "Tawang", "Naharlagun", "Pasighat"],
        "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Korba", "Bilaspur", "Durg"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
        "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Mandi"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
        "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur","Amravati", "Thane", "Nashik"],
        "Manipur": ["Imphal", "Bishnupur", "Churachandpur", "Thoubal"],
        "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh"],
        "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Lawngtlai"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
        "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
        "Sikkim": ["Gangtok", "Geyzing", "Namchi", "Mangan"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
        "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani"],
        "West Bengal": ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Durgapur"]
    };

    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    stateSelect.addEventListener('change', function() {
        const selectedState = stateSelect.value;
        const cities = stateCityMap[selectedState] || [];
        citySelect.innerHTML = '<option value="">Select city</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    });

    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Your order has been successfully placed. And will be delivered soon !!");
    });
});
