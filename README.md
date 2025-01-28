# Admin Dashboard

## Developer: Hira Khalid

### Project Overview

This project involves creating an admin dashboard with advanced features and modern tools. The goal is to build a responsive and secure platform with efficient data handling and user authentication.

---

### Key Features

1. **Admin Dashboard Layout**

   - File Structure: `app-dashboard-page.tsx`
   - Includes modern layout with mobile responsiveness.

2. **ShadCN UI Components**

   - Installed ShadCN for UI components.
   - Automatically downloads Lucid icons and includes:
     - Button
     - Dropdown
     - Avatar
     - Table
     - Card
     - Label
     - Textarea
     - Input
     - Switch
     - Select
     - Theme configuration
   - TailwindCSS integration for styling.
   - Setup Command:
     ```bash
     npx shadcn@latest add skeleton
     ```

3. **Authentication**

   - Library: `Kinde` for modern authentication.
   - Route Handler: `route.ts`
   - Secure server-side dashboard.
   - Removed async fetch session.
   - Customized Kinde design.

4. **Media Storage**

   - Platform: `uploadthings.com` for saving images and videos.
   - Simple signup and integration for media storage.

5. **Database Management**

   - Database Provider: `Neon` for scalable and modern database solutions.
   - Prisma:
     - Installed Prisma for database schema management.
       ```bash
       npm i -D prisma
       npm i @prisma/client
       ```

6. **Form Validation**

   - Libraries Used:
     - `Zod` for server-side validation.
     - `Conform` for type-safe form validation.
   - Example Code:
     ```javascript
     const flattenUrls = submission.value.images.flatMap((urlString) =>
         urlString.split(",").map((url) => url.trim())
     );
     ```

7. **Upstash Integration**

   - Serverless data platform.
   - Used for card radius management.

8. **Loading UI and Streaming**

   - Special File: `loading.js`
   - Uses React Suspense for instant loading states.
   - Automatically swaps content once rendering is complete.

9. **Payment Integration**

   - Library: `Stripe` for secure payments.
   - Setup:
     ```bash
     npm i stripe
     ```
   - Install Stripe CLI:
     ```bash
     stripe listen --forward-to http:localhost:3000/api/stripe
     ```
   - Note: Authentication keys expire after 90 days.

10. **Data Visualization**

    - Library: `Recharts` for creating interactive charts.
      ```bash
      npm install recharts
      ```

---

### Additional Libraries and Plugins

- TailwindCSS Aspect Ratio:
  ```bash
  npm install -D @tailwindcss/aspect-ratio
  ```
- `useFormState` for managing form states.

---

### Summary

This admin dashboard combines powerful tools like ShadCN UI, Prisma, Stripe, and modern authentication through Kinde to create a feature-rich, secure, and efficient platform. The integration of libraries like Zod and Conform ensures robust form validation, while Recharts provides data visualization capabilities.

For any inquiries or contributions, feel free to reach out to Hira Khalid.

hirakhalidgd\@gmail.com
