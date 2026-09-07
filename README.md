# Price Wholesale Distribution — Shopify Theme

Custom Shopify Online Store 2.0 theme for Price Wholesale Distribution.

## Current direction

- Family-owned since 1921
- Baltimore & Washington wholesale distributor
- Ice cream, beverages, snacks and foodservice
- Public company/brand information
- Dedicated B2B wholesale store
- B2B customer login and private wholesale pricing
- Wholesale catalogs and account-specific pricing
- Online ordering through Shopify
- QuickBooks Online integration handled through Shopify
- Responsive desktop and mobile design

## Theme behavior

The theme uses Shopify's `customer.b2b?` Liquid property to keep wholesale prices, add-to-order controls, cart contents and checkout content restricted to verified B2B customers.

Product data, inventory, variants, pricing and product photography remain in Shopify rather than being hard-coded into the theme.

## Shopify B2B launch checklist

Shopify admin configuration is separate from the GitHub theme and must be completed in the store admin:

1. **Activate Customer Accounts**
   - Shopify admin → Settings → Customer accounts.
   - Use the current Customer accounts system, not legacy customer accounts.
   - B2B customers authenticate with the email address associated with their company location.

2. **Create the wholesale catalog**
   - Shopify admin → Products → Catalogs.
   - Create the primary Price Wholesale catalog.
   - Add the products that Price Wholesale sells through the online portal.
   - Set the actual wholesale prices in the catalog rather than putting wholesale prices into theme code.
   - Add quantity rules or volume pricing where the business requires them.

3. **Create a test B2B company**
   - Shopify admin → Customers → Companies.
   - Create a test company and company location.
   - Assign the primary wholesale catalog to the location.
   - Add a test customer/contact to the company location.

4. **Choose order handling**
   - For the initial launch, use Shopify's B2B checkout/order settings appropriate to Price Wholesale's workflow.
   - If orders need internal approval before processing, configure B2B orders to be submitted as drafts for review.
   - If orders should flow directly through the normal Shopify workflow, use automatic order submission.

5. **Verify payment and shipping**
   - Configure the actual payment terms and shipping settings for B2B company locations.
   - Do not enable consumer-only accelerated checkout methods for B2B purchasing.

6. **Test before launch**
   - Sign in using the test B2B customer.
   - Confirm the correct catalog is visible.
   - Confirm wholesale prices are correct.
   - Confirm variants, quantity rules and inventory behave correctly.
   - Add products to the order and complete a test checkout.
   - Verify the resulting order appears correctly in Shopify and that the QuickBooks Online integration receives the intended transaction data.

## Customer application workflow

The theme includes a **Become a Customer** page for prospective wholesale accounts. The application page collects business and contact information, but approval still needs to be completed by the Price Wholesale team in Shopify before the applicant is assigned to a B2B company/location and receives wholesale access.

## Hero image

The homepage hero is intentionally configured as a Shopify Theme Editor image setting. The current homepage template points to the approved banner image selected in Shopify. Avoid replacing that setting in GitHub unless the hero needs to be changed.

## Contact information

- Phone: 443-604-5677
- Email: Nprice.icd@gmail.com

## Important integration note

QuickBooks Online is connected to the Shopify store. The theme does not contain accounting integration code and should not duplicate or bypass the Shopify/QuickBooks integration.
