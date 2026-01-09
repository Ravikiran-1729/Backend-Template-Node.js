// Load environment variables
require('dotenv').config();

// Import database initializer
const { connectDB } = require('./config/db.config');

// Import Express application
const app = require('./app');

// Server port configuration
const PORT = process.env.PORT || 3000;

// Initialize database and start server
async function init() {
    try {
        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed:', error.message);
        process.exit(1);
    }
}

init();