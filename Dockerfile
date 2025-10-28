# Step 1: Use Node.js LTS image
FROM node:20

# Step 2: Set working directory
WORKDIR /usr/src/app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all source code
COPY . .

# Step 6: Build TypeScript
RUN npm run build

# Step 7: Expose port
EXPOSE 4000

# Step 8: Run the server
CMD ["node", "dist/index.js"]
