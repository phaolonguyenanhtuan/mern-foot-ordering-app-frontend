import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisinesList } from "@/config/restaurant_options_config";
import { useFormContext } from "react-hook-form"
import CuisineCheckbox from "./CuisineCheckbox";



const CuisinesSection = () => {

    const {control} = useFormContext();

  return (
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Cuisines</h2>
            <FormDescription>
                Select cuisines that your restaurants serve.
            </FormDescription>
        </div>

        <FormField 
            control={control} 
            name="cuisines" 
            render={({field}) => (
            <FormItem>
                <div className="grid md:grid-cols-5 gap-1">
                    {cuisinesList.map((cuisineItem) => (
                        <CuisineCheckbox cuisine = {cuisineItem} field = {field} />
                    ))}
                </div>
                <FormMessage />
            </FormItem>
            )}
         />
    </div>
  )
}

export default CuisinesSection
