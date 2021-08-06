# Related Items Component
## Render Related Product Phots within Product Cards
 ### What data do I need?
  * http://localhost:3000/products/17067/related
    - this will give me an array of --> [17068,17069,17074,17073]
    - use these product id's to access http://localhost:3000/products/17067/styles
 ### Logic for implementing the process
   - 1.) Execute API call to  http://localhost:3000/products/17067/related
    * const [relatedProd, setRelatedProd] = useState([])
     - axios.get('/products/17071/related').then(({data}) => (data))
      - data = [17068,17069,17074,17073]
        - data.reduce(_id)
          - axios.get('/products/${_id}/styles').then(({data:[results]}) => {
             setRelatedProd(results)
            })
           - relatedProd = [{photos:[url,...]},....]
    - 2.) Render photos of related products within component
      - access local state and map through objects.

## Change Photos in Overview Main viewport when Product Card is clicked
 - Use id of related product to set id on api call.
 - <Img onClick={() => handleClick(id)} />
 - const handleClick = id => relatedProductClicked(id)
 - const relatedProductClicked = id => setProductId(id)










# Outfit Component
  ### what data do I need?
  - product.styles API
  ### Event Logic
  - user clicks
  - display a product card


## Event Logic
  ### Display Product card
   - First, display any image to the screen, then ...
   - Access the state of the overview component as a way of grabbing
   the specific product image to display.



