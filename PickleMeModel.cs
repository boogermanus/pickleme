namespace PickleMe;

public class PickleMeModel
{
    public double Cups { get; set; }
    public double Water { get; private set; }
    public double Vinegar { get; private set; }
    public double Sugar { get; private set; }
    public double Salt { get; private set; }

    public void Calculate()
    {
        Water = Cups / 2;
        Vinegar = Cups / 2;
        Sugar = Cups / 4;
        Salt = Cups * 16 / 16;
    }
}