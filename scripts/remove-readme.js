#!/usr/bin/env node

/**
 * Remove README files from the build directory before deployment
 * This ensures documentation files are not deployed with the application
 */

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

try {
  const files = fs.readdirSync(buildDir);
  const readmeFiles = files.filter(file => /^readme\.md$/i.test(file));
  
  readmeFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    fs.unlinkSync(filePath);
    console.log(`Removed ${file} from build directory`);
  });
  
  if (readmeFiles.length === 0) {
    console.log('No README files found in build directory');
  }
} catch (error) {
  // Silently fail if build directory doesn't exist or other errors occur
  // This prevents deployment from failing if there's nothing to remove
}
